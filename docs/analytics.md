# Umami analytics

Instance: https://track.pixmiller.com. Each production site has its own website and dataset:

| Site | Website ID |
| --- | --- |
| AnyPS5.cc | `60f340a2-4cd3-49fd-a95c-25f01ab47701` |
| AnyPS5.games | `7f69f436-bf20-4bb1-8fdb-bf34e74ae085` |

The shared layout loads the deferred tracker once on every page. Domain restrictions exclude localhost and previews. Pageviews omit query strings and fragments; changing catalog filters therefore does not create additional pageviews. Both Nginx CSPs allow script loading and reporting only to this Umami origin. Browser Do Not Track and Umami's `umami.disabled` preference are respected.

Custom events include `site` and the content `locale`. Umami also records the current page path, referrer and browser/device context. No accounts or distinct user IDs are used. Search text and copied code are never event properties; only search length is recorded. External source paths exclude query strings and fragments.

| Event | Trigger | Additional properties |
| --- | --- | --- |
| `catalog_search` | Submit or finish editing a nonempty search; repeated unchanged input is deduplicated | `query_length`, `result_count`, `platform`, `stage`, `evidence` |
| `catalog_filter` | Change one dropdown | `filter`, catalog context above |
| `catalog_reset` | Use either reset button | Previous catalog context |
| `catalog_share` | Clipboard copy succeeds or fails | `success`, catalog context |
| `game_open` | Open a game from search results | `game`, catalog context |
| `catalog_category_click` | Open tested/untested collection | `category`, `placement` |
| `guide_open` | Open a setup, guide, download, troubleshooting or progress page | `guide`, `placement` |
| `download_click` | Click an upstream GitHub release asset | `file`, `placement` |
| `cross_site_click` | Switch between the two sites | `destination`, `placement` |
| `source_click` | Open an external report, source or media reference | `host`, `path`, `placement` |
| `contribution_open` | Open the contribution page | `placement` |
| `code_copy` | Copy a guide example, including failures | `section`, `success` |
| `theme_change` | Toggle appearance | `theme` |
| `locale_change` | Choose a language | `to_locale` |

`download_click` measures intent to download, not completed downloads. `catalog_share` measures copying a URL, not sending it to another person. Returning to a search state with browser history does not emit a new search/filter event. Blocked or unavailable analytics never prevents using the sites.

Use result counts to find unsuccessful searches, filters to prioritise platform coverage, game/guide clicks to choose content, and cross-site clicks to assess the setup-to-game journey. Review events and properties in each website's Umami dashboard; compare content locale with the automatic browser language to assess localisation.

Validation: `npm test` and `npm run build` verify content plus the single tracker, per-site ID, domain/privacy flags and both CSPs across all generated pages. After a release, verify actual `/api/send` responses and matching events through the authenticated Umami API.

## Discovery additions — 2026-10-12

Header search emits `global_game_search` with query length and result count, and `global_game_open` with the selected game slug and query length. Raw queries are excluded. Existing catalog events now also include `order` (`featured`, `name`, `reviewed`, or `tested`). Production-domain isolation and tracker failure handling stay in the shared analytics helper.
