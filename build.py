#!/usr/bin/env python3
"""Rebuild index.html from the source parts. Usage: python3 build.py"""
import json, os
d = os.path.dirname(os.path.abspath(__file__)) + '/src/'
games = json.load(open(d + 'games.json'))
m = open(d + 'main.js').read(); pr = open(d + 'prono.js').read()
m = m.replace("/* ================= EDITOR ================= */", pr + "\n/* ================= EDITOR ================= */", 1)
head = open(d + 'head.part').read().replace('__BG__', open(d + 'bg.b64').read())
tpl = head + '\n</head>\n<body>\n<div id="app"></div>\n<div class="copy" id="copy"></div>\n<div id="print"></div>\n<script id="games-data" type="application/json">__GAMES__</script>\n<script>__QRLIB__</script>\n<script>\n' + m + '</script>\n</body>\n</html>\n'
s = tpl.replace('__GAMES__', json.dumps(games, ensure_ascii=False).replace('<', '\\u003c')).replace('__QRLIB__', open(d + 'qrlib.js').read()).replace('__LOGO__', open(d + 'logo.b64').read())
open(os.path.dirname(os.path.abspath(__file__)) + '/index.html', 'w').write(s)
print('index.html rebuilt,', len(s), 'bytes')
