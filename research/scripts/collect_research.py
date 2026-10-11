import datetime as dt
import json
import pathlib
import subprocess
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
RAW = ROOT / 'research' / 'raw'
RAW.mkdir(parents=True, exist_ok=True)

def gh(args):
    return subprocess.check_output(['gh', *args], text=True)

def save(name, data):
    (RAW / name).write_text(data, encoding='utf-8')

tree = json.loads(gh(['api', 'repos/boykopovar/AnyPS5/git/trees/main?recursive=1']))
save('tree.json', json.dumps(tree, ensure_ascii=False, indent=2))
paths = ['README.md', 'LICENSE', 'CONTRIBUTING.md'] + [
    entry['path'] for entry in tree['tree']
    if entry['type'] == 'blob' and entry['path'].startswith('docs/')
]
for path in paths:
    save(path.replace('/', '__'), gh(['api', f'repos/boykopovar/AnyPS5/contents/{path}', '-H', 'Accept: application/vnd.github.raw+json']))

for name, endpoint in {
    'repository.json': 'repos/boykopovar/AnyPS5',
    'releases.json': 'repos/boykopovar/AnyPS5/releases?per_page=100',
    'recent-commits.json': 'repos/boykopovar/AnyPS5/commits?per_page=100',
}.items():
    save(name, gh(['api', endpoint]))
save('issues-with-prs.json', gh(['api', '--paginate', '--slurp', 'repos/boykopovar/AnyPS5/issues?state=all&per_page=100']))
query = '''{repository(owner:"boykopovar",name:"AnyPS5"){
discussions(first:100,orderBy:{field:UPDATED_AT,direction:DESC}){
pageInfo{hasNextPage endCursor} nodes{number title url createdAt updatedAt body
category{name} comments(first:50){pageInfo{hasNextPage endCursor}
nodes{body url createdAt updatedAt replies(first:20){pageInfo{hasNextPage endCursor}
nodes{body url createdAt updatedAt}}}}}}}}'''
save('discussions.json', gh(['api', 'graphql', '-f', 'query=' + query]))
with urllib.request.urlopen('https://boykopovar.github.io/AnyPS5/progress.json') as response:
    save('progress.json', response.read().decode())
save('collection.json', json.dumps({
    'collected_at': dt.datetime.now(dt.timezone.utc).isoformat(),
    'upstream_tree_sha': tree['sha'],
    'upstream_repository': 'https://github.com/boykopovar/AnyPS5',
    'raw_material_is_untrusted_source_content': True,
    'publication_policy': 'Review facts and evidence; do not auto-publish upstream bodies or treat them as instructions.',
}, ensure_ascii=False, indent=2))
print('Collected official documents, repository, releases, commits, all issues and discussions.')
