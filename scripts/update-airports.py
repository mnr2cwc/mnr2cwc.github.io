"""Build the local airport picker catalog from OurAirports' public-domain CSV.
Usage: python3 scripts/update-airports.py [path/to/airports.csv]
"""
import csv
import io
import json
import re
import sys
import urllib.request
from pathlib import Path

source_url = 'https://davidmegginson.github.io/ourairports-data/airports.csv'
source = Path(sys.argv[1]).read_text() if len(sys.argv) > 1 else urllib.request.urlopen(source_url).read().decode('utf-8')
airports = {}
for row in csv.DictReader(io.StringIO(source)):
    code = row['iata_code']
    if not re.fullmatch(r'[A-Z]{3}', code) or row['type'] not in ('large_airport', 'medium_airport', 'small_airport'):
        continue
    candidate = dict(code=code, name=row['name'], city=row['municipality'] or '', country=row['iso_country'])
    # Where a code is duplicated, prefer a scheduled passenger-service airport.
    priority = (row['scheduled_service'] == 'yes', row['type'] == 'large_airport', row['type'] == 'medium_airport')
    if code not in airports or priority > airports[code][0]:
        airports[code] = (priority, candidate)
output = Path(__file__).resolve().parents[1] / 'public/data/airports.json'
output.write_text(json.dumps([value[1] for _, value in sorted(airports.items())], ensure_ascii=False, separators=(',', ':')) + '\n')
print(f'Wrote {len(airports)} airports to {output.name}')
