# Mise à jour des résultats des pronostics LA BULL

Les sources de l'appli sont dans `src/`. Après toute modification, lancer `python3 build.py` pour régénérer `index.html`, puis commit + push sur `main` (GitHub Pages publie automatiquement).

## Où mettre les résultats
Dans `src/games.json`, chaque pronostic (`"kind": "prono"`) peut recevoir un champ `"out"` : un tableau de **même longueur que `questions`**, aligné question par question.

- question `"type": "score"` → `[score équipe A, score équipe B]` (A = `teams.a` de la question, ou du pronostic s'il n'y a qu'un match). Ex. `[24, 17]`
- question `"type": "single"` → **index** (0, 1, 2…) de la bonne option dans `o`
- question `"type": "number"` → nombre entier
- résultat inconnu → `null` (ne jamais inventer : laisser `null` si la source officielle ne le donne pas)

Ne remplir que les matchs **terminés**. Ne jamais modifier les questions, les ids ni l'ordre.

## Sources
Scores : sites officiels (premierleague.com, sites des fédérations / World Rugby) ou médias sportifs reconnus (BBC Sport, L'Équipe, ESPN). Vérifier chaque score sur deux sources. Pour les questions bonus (premier essai, carton jaune, mi-temps, minute…), utiliser le compte rendu détaillé ; sinon `null`.
