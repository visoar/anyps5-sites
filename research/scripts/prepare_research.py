import csv
import datetime as dt
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
RAW = ROOT / 'research/raw'
def write(name, data):
    (ROOT / 'research' / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
def read(name):
    return json.loads((RAW / name).read_text())

regions = {}
for window in ['30d', '7d']:
    rows = list(csv.reader((RAW / f'trends-countries-{window}.csv').read_text(encoding='utf-8-sig').splitlines()))
    regions[window] = {
        'export_header': rows[2],
        'ranked_regions': [{'country_zh': row[0], 'relative_interest': int(row[1])}
                           for row in rows[3:] if len(row) > 1 and row[1].isdigit()],
        'no_numeric_result': [row[0] for row in rows[3:] if len(row) > 1 and not row[1]],
    }
write('trends-regions.json', {
    'captured_date': '2026-10-11', 'query': 'AnyPS5', 'type': 'Search term',
    'category': 'All categories', 'search_type': 'Google Web Search', 'geography': 'Worldwide',
    'source': 'https://trends.google.com/trends/explore?date=today%201-m&q=AnyPS5',
    'methodology': 'https://support.google.com/trends/answer/4365533?hl=en',
    'limitation': 'Regional 0–100 indices describe query share of all local searches, not absolute search counts. Blank exports are unavailable, not zero. Each time window is independently normalized. Sampling, partial current day and country/search-language mismatch limit language-demand inference.',
    'windows': regions,
})

discussions = read('discussions.json')['data']['repository']['discussions']
nodes = discussions['nodes']
reports = [n for n in nodes if n['category']['name'] == 'Game bring-up' and re.search(r'PPSA\d+', n['title'])]
catalog = {}
for report in reports:
    title_id = re.search(r'PPSA\d+', report['title']).group(0)
    name = report['title'].split('(')[0].strip().removesuffix(' -')
    if title_id == 'PPSA03306':
        name = 'Silt'
    if title_id == 'PPSA07631':
        name = 'SAROS'
    if title_id == 'PPSA99666':
        name = 'DOOM homebrew (PS5 port)'
    item = catalog.setdefault(title_id, {'name': name, 'reported_title_id': title_id, 'identity_scope': 'Reported upstream title ID; edition/region still requires review.', 'reports': []})
    body = report['body']
    all_text = body + '\n' + '\n'.join(c['body'] + '\n' + '\n'.join(r['body'] for r in c['replies']['nodes']) for c in report['comments']['nodes'])
    media_links = sorted(set(re.findall(r'https://[^\s<>)\"\]]+\.(?:png|jpg|jpeg|webp|mp4)(?:\?[^\s<>)\]]*)?', all_text, re.I)))
    attachment_links = sorted(set(re.findall(r'https://github\.com/user-attachments/(?:assets|files)/[^\s<>)\"\]]+', all_text)))
    item['reports'].append({
        'source_url': report['url'], 'source_title': report['title'], 'discussion_number': report['number'],
        'posted_at': report['createdAt'], 'updated_at': report['updatedAt'],
        'source_excerpt_for_review': body[:1800], 'comments_count': len(report['comments']['nodes']),
        'media_links': media_links, 'attachment_links': attachment_links,
        'publication_state': 'Pending structured editorial review; not independently reproduced.',
        'media_policy': 'Reference original source; verify attribution/permission before displaying media. No generated images presented as gameplay.',
    })
write('game-source-index.json', {
    'source_collected_at': read('collection.json')['collected_at'],
    'unique_reported_title_ids': len(catalog), 'game_discussions': len(reports), 'all_discussions': len(nodes),
    'games': sorted(catalog.values(), key=lambda x: x['name']),
    'pagination_complete': not discussions['pageInfo']['hasNextPage'] and not any(n['comments']['pageInfo']['hasNextPage'] or any(c['replies']['pageInfo']['hasNextPage'] for c in n['comments']['nodes']) for n in nodes),
})

official = 'https://github.com/boykopovar/AnyPS5/blob/main/docs/user/COMPATIBILITY.md'
write('reviewed-examples.json', {
    'editorial_review_date': '2026-10-11', 'local_game_tests_performed': False,
    'records': [
        {'game': 'Dreaming Sarah', 'reported_title_id': 'PPSA02929', 'platform': 'Windows',
         'evidence': 'official_table', 'milestone': 'in_game', 'source_conclusion': 'playable',
         'source_url': official, 'anyps5_build': None, 'game_version': None, 'test_date': None,
         'benchmarks': [{'cpu': 'Intel i5-7500 3.4 GHz', 'gpu': 'GTX 1050 Ti', 'reported_fps': 60}, {'cpu': 'Intel i5-7200 2.5 GHz', 'gpu': 'Intel HD Graphics 620', 'reported_fps': 36}],
         'limitations': ['Hardware-specific source reports, not our measurements.', 'Linux is unknown in the official table.', 'No full-game-completion claim.']},
        {'game': 'Dreaming Sarah', 'reported_title_id': 'PPSA02929', 'platform': 'Windows 11 23H2',
         'evidence': 'community_report', 'milestone': 'in_game', 'source_conclusion': 'Opening forest area reportedly runs at about 60 FPS with a local fix.',
         'source_url': 'https://github.com/boykopovar/AnyPS5/discussions/3018', 'anyps5_build': '379d8b4e + 8acd0113',
         'gpu': 'AMD Radeon RX 6700 XT', 'driver': 'Adrenalin 25.10.45.05', 'test_date': None,
         'source_update_date': '2026-10-11', 'source_history': 'Earlier unpatched run crashed in amdvlk64.dll at the first graphics submission.',
         'limitations': ['Local patched tree.', 'Only opening area tested by the reporter.', 'No independent reproduction.']},
        {'game': 'Silt', 'reported_title_id': 'PPSA03306', 'content_id': 'EP2520-PPSA03306_00-SIEESILTFULLGAME',
         'game_version': '01.003.000', 'platform': 'Windows 11, build 10.0.26200',
         'evidence': 'community_report', 'milestone': 'in_game',
         'source_url': 'https://github.com/boykopovar/AnyPS5/discussions/2810',
         'anyps5_build': 'ba2a0a31 plus four local changes', 'gpu': 'AMD Radeon RX 5700 XT',
         'reported_fps_range': [44,52], 'source_update_date': '2026-10-10', 'test_date': None,
         'source_conclusion': 'Menu, gameplay, area transitions and sound reported with the patch.',
         'limitations': ['No antialiasing due to workaround.', 'Rendering artefact remains.', 'Community experimental result; no official playable claim.']},
    ],
})

pages = read('issues-with-prs.json')
items = [item for page in pages for item in page]
releases = read('releases.json')
repo = read('repository.json')
write('research-manifest.json', {
    'created_at': dt.datetime.now(dt.timezone.utc).isoformat(),
    'upstream_tree_observed': read('collection.json')['upstream_tree_sha'],
    'snapshot_note': 'Live main and API endpoints were read over a collection interval; raw files are dated snapshots, not one atomic commit snapshot.',
    'official_markdown_documents': len(list(RAW.glob('*.md'))),
    'issues_and_prs': len(items), 'unique_api_objects': len({item['id'] for item in items}),
    'issues_excluding_prs': sum('pull_request' not in item for item in items),
    'pull_requests': sum('pull_request' in item for item in items),
    'discussions': len(nodes), 'game_discussions': len(reports), 'reported_game_ids': len(catalog),
    'releases': [{'tag': r['tag_name'], 'published_at_utc': r['published_at'], 'url': r['html_url']} for r in releases],
    'repository_snapshot': {k: repo[k] for k in ['stargazers_count','forks_count','open_issues_count','pushed_at']},
    'progress_snapshot': {k: {field: read('progress.json')[k][field] for field in ['done','total','percent']} for k in ['libraries','shaders']},
    'current_link_checks': [
        {'url':'https://github.com/OverkillLabs/DeadCells-PS5-Native','result':'GitHub API and current web read returned 404; cached search result remains. Do not use as verified active download.'},
        {'url':'https://github.com/boykopovar/AnyPS5/issues/38','result':'Current GitHub API returned 404; cached search result remains. Historical coverage only.'},
    ],
})
print(json.dumps({'regions': {k:len(v['ranked_regions']) for k,v in regions.items()},'game_ids':len(catalog),'game_reports':len(reports),'issues_prs':len(items)},ensure_ascii=False))
