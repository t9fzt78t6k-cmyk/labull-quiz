# Programme LA BULL dans l'appli

Chaque soirée, affiche ou information LA BULL préparée avec Claude doit être ajoutée automatiquement à l'appli.

- Données : `src/events.json` (une entrée par soirée) :
  `d` date AAAA-MM-JJ · `c` couleur · `img` clé d'image (`ev_<clé>` dans `src/assets.json`, vignette webp 320×240 tirée de l'affiche officielle, ou `""`) ·
  `t` titre {fr,en} · `h` accroche {fr,en} · `tm` horaire {fr,en} (sinon « Ouvert dès 17h ») ·
  `ch` pictos [[emoji, FR, EN]] : toujours un picto musique (musique, chant ou instrument) et un picto restauration (par défaut 🍕 Bull'izzas) · `resa` true si sur réservation.
- Pour une nouvelle image : ajouter `ev_<clé>` dans `src/assets.json` et la classe `.evi-<clé>` dans `src/head.part`.
- Ne jamais inventer : uniquement les infos officielles fournies (SIRET 990 143 810 00010, 07 68 11 79 87, 121 rue des Deux Cèdres, 24500 Serres-et-Montguyard).
- Puis `python3 build.py`, commit et push sur `main` : les soirées passées disparaissent toutes seules.
