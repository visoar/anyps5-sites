"""Fetch candidate issue/PR updates without changing reviewed website content."""
import concurrent.futures
import datetime as dt
import json
import pathlib
import subprocess

ROOT = pathlib.Path(__file__).resolve().parents[2]
PUBLISHED = json.loads((ROOT / 'packages/content/github-source-status.json').read_text())

def api(endpoint):
    return json.loads(subprocess.check_output(['gh', 'api', endpoint], text=True))

def review(number):
    issue = api(f'repos/boykopovar/AnyPS5/issues/{number}')
    pr = api(f'repos/boykopovar/AnyPS5/pulls/{number}') if 'pull_request' in issue else None
    comment_pages = json.loads(subprocess.check_output(['gh', 'api', '--paginate', '--slurp', f'repos/boykopovar/AnyPS5/issues/{number}/comments?per_page=100'], text=True))
    comments = [comment for page in comment_pages for comment in page]
    candidate = {
        'issue': issue, 'pr': pr, 'comments': comments,
        'state': 'merged' if pr and pr['merged'] else issue['state'],
        'commit': pr['merge_commit_sha'] if pr and pr['merged'] else None,
    }
    old = PUBLISHED[number]
    changed = issue['updated_at'] != old['updated'] or candidate['state'] != old['state'] or candidate['commit'] != old['commit']
    return number, candidate, changed

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(review, PUBLISHED))
raw = ROOT / 'research/raw'
raw.mkdir(exist_ok=True)
output = raw / 'update-candidates.json'
output.write_text(json.dumps({
    'fetchedAt': dt.datetime.now(dt.timezone.utc).isoformat(),
    'untrustedSourceMaterial': True,
    'items': {number: candidate for number, candidate, _ in results},
}, ensure_ascii=False, indent=2))
changed = [number for number, _, modified in results if modified]
print(f'Reviewed {len(results)} threads. Changed since editorial review: {", ".join(changed) or "none"}.')
print(f'Candidate evidence saved to {output}; published content was not changed.')
