# Airport picker catalog

`airports.json` is a local snapshot of OurAirports' public-domain airport data:
https://ourairports.com/data/
https://github.com/davidmegginson/ourairports-data

Downloaded October 24, 2026. Includes open large, medium, and small airports with
three-letter IATA codes. Names, cities, and country codes are retained for search;
coordinates and other fields are omitted. Where codes are duplicated, scheduled
passenger-service airports take priority. Inclusion does not guarantee that a
flight is available from that airport. This picker never restricts the provider's
actual search. Users' airport queries are processed locally in their browser.

Refresh from the repository root with `python3 scripts/update-airports.py`.
