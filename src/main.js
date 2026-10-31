const SRC = '<!doctype html>\n' + document.documentElement.outerHTML;
const LOGO = 'data:image/jpeg;base64,__LOGO__';
const YEAR = new Date().getFullYear();
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LS = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};

/* ================= TEXTS ================= */
const T = {
fr: {
  copy: `© ${YEAR} Tous droits réservés · Propriété de SKÅL / LA BULL`, appSub: 'Quiz · Sondages',
  scanToPlay: 'Scannez le QR code affiché au bar pour participer.', hostSpace: 'Espace animateur',
  team: 'Nom de votre équipe', solo: 'Votre prénom & nom', name: 'Votre prénom', teamPh: 'Ex. : Les Leprechauns', soloPh: 'Ex. : Marie Dupont', namePh: 'Ex. : Marie',
  start: 'C’est parti !', q: 'Question', prev: '← Précédent', next: 'Suivant →', recap: 'Récapitulatif', review: 'Vérifiez vos réponses',
  tapEdit: 'Touchez une réponse pour la modifier.', missing: n => `${n} question(s) sans réponse`, validate: 'Valider mes réponses',
  confirmV: 'Valider définitivement ?', confirmVt: 'Vous ne pourrez plus modifier vos réponses.', yes: 'Oui, valider', no: 'Annuler',
  showQR: 'Montrez ce QR code à l’animateur', locked: 'Réponses validées et verrouillées ✔', results: 'Résultats et tirage au sort en fin de partie !',
  pollThanks: 'Merci pour votre participation !', yourAns: 'Vos réponses', notFound: 'Introuvable', notFoundT: 'Ce QR code ne correspond à aucun jeu ni sondage. Demandez au bar le bon QR code.',
  pin: 'Code animateur', enter: 'Entrer', badPin: 'Code incorrect', back: '← Retour', backS: 'Retour', home: 'Accueil',
  homeT: 'Touchez « QR pour participer » pour faire scanner un quiz ou un sondage.', newQuiz: 'Créer un quiz', newPoll: 'Créer un sondage',
  all: 'Tout', quizzes: 'Quiz', polls: 'Sondages', upcoming: 'Aujourd’hui et à venir', past: 'Passés', none: 'Rien ici pour l’instant.',
  kQuiz: '🧠 Quiz', kPoll: '📊 Sondage', qCount: n => `${n} question(s)`, received: n => `${n} fiche(s) reçue(s)`, participants: n => `${n} participant(s)`,
  playQR: 'QR pour participer', recvS: 'Recevoir une fiche', ranking: 'Classement', stats: 'Résultats', keyS: 'Questions & corrigé', qsS: 'Questions',
  playHereS: 'Participer ici', edit: 'Modifier', dup: 'Dupliquer', settings: 'Réglages', lock: 'Verrouiller', printS: 'Imprimer',
  joinTitle: 'Scannez pour participer', printLine: 'Scannez avec l’appareil photo de votre téléphone · Scan with your phone camera',
  recvT: 'Recevoir une fiche', recvHow: 'Ouvrez l’appareil photo de votre téléphone et visez le QR code affiché sur le téléphone du participant, puis touchez le lien qui apparaît : la fiche s’enregistre toute seule.',
  manual: 'Saisie manuelle', manualT: 'Nom de l’équipe puis les réponses dans l’ordre (ex. : ACBBA…)', add: 'Ajouter', close: 'Fermer',
  saved: 'Fiche enregistrée', already: 'Fiche mise à jour (déjà reçue)', score: 'Score', rankNow: r => `Classement provisoire : ${r === 1 ? '1er' : r + 'e'}`,
  pollSaved: 'Réponse enregistrée', seeStats: 'Voir les résultats', seeAns: 'Voir ses réponses en détail',
  noRes: 'Aucune fiche reçue pour l’instant.', draw: 'Tirage au sort', drawTop: 'Parmi le meilleur score', drawAll: 'Parmi tous', drawGo: 'Lancer le tirage !', again: 'Relancer',
  details: 'Détail', errOnly: 'Erreurs seulement', allQ: 'Toutes les questions', given: 'Réponse donnée', good: 'Bonne réponse', noAns: 'Sans réponse', errors: n => `${n} erreur(s)`, receivedAt: 'Reçue à',
  zeroT: 'Remise à zéro', zeroGame: 'Effacer les résultats de ce jeu', zeroAll: 'Tout remettre à zéro (tous les jeux et sondages)',
  zeroPin: 'Entrez le code animateur pour confirmer. Les résultats effacés ne pourront pas être récupérés.', zeroGo: 'Effacer', zeroDone: 'Résultats remis à zéro',
  avg: 'Moyenne', answers: n => `${n} réponse(s)`, anonymous: 'Anonyme', byPerson: 'Réponses par participant',
  tSingle: 'Choix unique', tMulti: 'Choix multiples', tStars: 'Note de 1 à 5 ★', tText: 'Réponse libre',
  multiHint: 'Plusieurs réponses possibles', starsHint: 'Touchez une étoile', textHint: 'Quelques mots (facultatif)', textPh: 'Votre réponse…',
  title: 'Titre', subtitle: 'Accroche', date: 'Date', mode: 'Type de participation', modeTeam: 'Par équipe', modeSolo: 'Individuel',
  anonL: 'Participants', anonY: 'Anonyme', anonN: 'Avec prénom', color: 'Couleur', questions: 'Questions', addQ: '+ Ajouter une question',
  qType: 'Type de question', correct: 'Touchez la bonne réponse (en vert)', info: 'Anecdote pour le corrigé (facultatif)', qFr: 'Question en français', qEn: 'Question en anglais',
  optFr: 'Réponse FR', optEn: 'Réponse EN', addOpt: '+ réponse', save: 'Enregistrer', del: 'Supprimer', delQ: 'Supprimer ?', minQ: 'Ajoutez au moins une question complète.',
  builtinRO: 'Intégré à l’appli : dupliquez-le pour le modifier.', newPin: 'Nouveau code animateur', pinSaved: 'Enregistré',
  export: 'Mettre à jour le fichier de l’appli', exportT: 'Télécharge une version de l’appli contenant tous vos jeux et sondages.',
  backup: 'Sauvegarder mes créations (.json)', import: 'Importer (.json)', baseL: 'Adresse de l’appli en ligne', baseT: 'Appli ouverte hors ligne : indiquez son adresse internet (https://…) pour que les QR codes fonctionnent.', baseOn: 'Appli en ligne à l’adresse :',
  offline: 'Appli pas encore en ligne : ce QR code ne pourra pas être lu.', tooLong: 'Trop long pour tenir dans le QR code : demandez à l’intégrer à l’appli.',
  unknownGame: 'Cette fiche concerne un jeu absent de ce téléphone.', mismatch: 'Attention : le nombre de questions ne correspond pas.',
  camErr: 'Impossible d’ouvrir la caméra ici. Utilisez l’appareil photo du téléphone.', scanning: 'Visez le QR code du participant…',
  createdLocal: 'créé sur ce téléphone', newProno: 'Pronostic', kProno: '🏉 Pronostic', pronosF: 'Pronos', create: 'Créer', pronos: n => `${n} prono(s)`,
  draw0: 'Match nul', finalScore: 'Score final', enterOut: 'Saisir le résultat du match', editOut: 'Modifier le résultat du match', outHint: 'Remplissez ce que vous savez : le classement se calcule tout seul.', saveOut: 'Enregistrer le résultat',
  trend: 'Tendance des pronostics', tieRule: 'Égalité de points : le plus proche du score exact passe devant, puis le plus proche aux questions « nombre ».', ptsTitle: 'Barème',
  ptsRule: 'Bon vainqueur (ou nul) : 3 pts · Bon écart : +2 pts · Score exact : +5 pts · Chaque question bonus juste : +1 pt. Égalité : le plus proche du score exact gagne.',
  real: 'Résultat réel', optional: 'facultatif', pronoDone: 'Prono enregistré ! Classement et tirage au sort après le match.', pronoSaved: 'Pronostic enregistré', needScore: 'Indiquez au moins le score du match.',
  sport: 'Sport', rugby: 'Rugby', foot: 'Football', other: 'Autre', teamAL: 'Équipe 1 (à domicile)', teamBL: 'Équipe 2', time: 'Heure du coup d\u2019envoi',
  addFun: '✨ Ajouter les questions bonus rigolotes', allPronos: 'Tous les pronostics', alcohol: 'L\u2019abus d\u2019alcool est dangereux pour la santé, à consommer avec modération.', homeQa: 'Qu\u2019est-ce qu\u2019on propose', homeQb: 'ce soir', whoT: 'Qui joue ?', whoS: 'Déjà inscrit ? Touchez votre nom et entrez votre code. Sinon, inscrivez-vous.', newP: 'Nouveau joueur · Je m\u2019inscris', search: 'Rechercher un nom', skipId: 'Jouer sans s\u2019identifier', pinAsk: 'Entrez votre code à 4 chiffres', pinBad: 'Code incorrect', pinForgot: 'Code oublié ? Demandez-le à l\u2019animateur au bar.', yourPin: 'Votre code personnel :', pinKeep: 'Notez-le ! Il vous permettra de vous identifier la prochaine fois, pour les quiz, sondages et pronostics. En cas d\u2019oubli, l\u2019animateur peut vous en redonner un.', pinOk: 'C\u2019est noté, on continue !', alreadyReg: 'Déjà inscrit ? M\u2019identifier', playersT: 'Joueurs', playersS: 'Les joueurs inscrits et leur code. Touchez •••• pour voir un code, ou donnez-en un nouveau en cas d\u2019oubli.', resetPin: 'Nouveau code', newPinIs: 'Nouveau code à donner au joueur :', savedHere: 'Enregistré directement dans les résultats !', notYou: 'Ce n\u2019est pas vous ? Nouveau joueur', nextPlayer: 'Joueur suivant sur ce téléphone', imported: n => `${n} participation(s) faite(s) sur ce téléphone récupérée(s)`, changePl: 'Changer de joueur', doneB: 'Pronostics déjà faits', sumT: 'Tous les pronostics', bestT: 'Meilleurs pronostiqueurs', byMatch: 'Qui a pronostiqué quoi', playerL: 'Joueur', exactL: 'score(s) exact(s)', legend: 'Vert : score exact · Doré : bon vainqueur · Rouge : raté. Touchez une ligne pour le détail.', fetchBtn: 'Récupérer les résultats', fetching: 'Recherche des résultats…', fetchedOk: 'Nouveaux résultats trouvés : mise à jour !', fetchedNone: 'Pas encore de nouveaux résultats en ligne. Ils arrivent automatiquement chaque soir ; sinon, saisissez le score.', fetchErr: 'Impossible de vérifier (pas de connexion ?)', autoRes: 'Résultats mis à jour automatiquement', homeQ: 'Qu\u2019est-ce qu\u2019on propose ce soir ?', nowL: 'En ce moment', nowNone: 'Rien de prévu cette semaine… on crée quelque chose ?', createQ: 'Que voulez-vous créer ?', crQuiz: 'Questions avec bonnes réponses, classement et tirage au sort', crPoll: 'Avis, votes, notes en étoiles, réponses libres', crProno: 'Un match ou une journée : scores, questions bonus, classement', cancelS: 'Annuler', cancelQ: 'Annuler votre participation ?', cancelT: 'Vos réponses en cours seront effacées.', cancelYes: 'Oui, annuler', fixAns: 'Corriger mes réponses', fixT: 'Si vous corrigez après avoir montré votre QR, montrez le nouveau QR à l\u2019animateur : il remplacera l\u2019ancien.', fixYes: 'Corriger', cancelEd: 'Annuler les modifications ?', cancelEdT: 'Rien ne sera enregistré.', hubHost: 'Un seul QR pour tous les matchs : inscription puis choix des matchs', openHere: 'Ouvrir ici', otherPronos: 'Pronostiquer d\u2019autres matchs', hubT: 'Pronostics LA BULL', hubS: 'Choisissez vos matchs, donnez vos scores, montrez votre QR au bar !', hubNone: 'Aucun pronostic ouvert pour le moment.', hubDone: '✅ Prono envoyé · revoir mon QR', hubGo: '▶ Pronostiquer', hello: n => `Bonjour ${n} !`, editMe: 'Modifier / supprimer mes infos',
  regT: 'Inscription', regS: 'Pour participer et recevoir vos résultats. Gratuit, sans obligation d\u2019achat.', regName: 'Prénom ou pseudo', regHow: 'Recevoir mes résultats par', sms: 'SMS', email: 'E-mail', regPhone: 'Numéro de portable', regMail: 'Adresse e-mail',
  c1: 'J\u2019accepte que LA BULL utilise mon prénom et mon numéro / e-mail uniquement pour m\u2019envoyer les résultats de mes pronostics. (obligatoire)',
  c2: 'J\u2019accepte aussi de recevoir les infos et les soirées de LA BULL. Je peux me désinscrire à tout moment (réponse « STOP » ou lien de désinscription). (facultatif)',
  c3: 'J\u2019ai 15 ans ou plus. (obligatoire)', regGo: 'Je m\u2019inscris', regBad: 'Vérifiez votre prénom, votre numéro ou e-mail et les cases obligatoires.',
  privT: '🔒 Protection de vos données', delMe: 'Supprimer mes infos de ce téléphone', delDone: 'Infos supprimées',
  priv: 'Responsable : LA BULL, 121 Rue des 2 Cèdres, 24500 Serres-et-Montguyard (SIRET 990 143 810 00010). Finalité : vous envoyer les résultats de vos pronostics et, seulement si vous cochez la case, les infos et soirées de LA BULL. Base légale : votre consentement, que vous pouvez retirer à tout moment. Vos données ne sont ni vendues ni transmises : elles restent sur le téléphone de l\u2019animateur de LA BULL. Conservation : effacées au plus tard 3 mois après la fin de la compétition ; pour les infos de LA BULL, 3 ans après votre dernier contact. Vous pouvez demander l\u2019accès, la rectification ou la suppression de vos données au bar ou au 07 68 11 79 87, et saisir la CNIL (cnil.fr). Jeu gratuit, sans obligation d\u2019achat.',
  contactL: 'Contact', sendRes: 'Envoyer son résultat', mkYes: 'accepte les infos LA BULL', mkNo: 'résultats seulement', csv: 'Contacts (CSV)',
  msgRes: (n, ti, p, pos, N) => `LA BULL · ${ti} : bravo ${n}, vous avez ${p} pts et vous êtes ${pos === 1 ? '1er' : pos + 'e'} sur ${N} ! Merci et à bientôt à LA BULL.`, msgStop: 'Répondez STOP pour ne plus recevoir de messages.', matches: 'matchs', ptsRuleM: 'Pour chaque match : bon vainqueur (ou nul) 3 pts · bon écart +2 pts · score exact +5 pts. Question bonus juste : +1 pt. Égalité : le plus proche des scores exacts gagne. Pas obligé de pronostiquer tous les matchs.', funAdded: 'Questions bonus ajoutées', tNumber: 'Nombre', tYesNo: 'Oui / Non', tScore: 'Score du match', vs: 'contre',
  scoreHint: 'Touchez + / − ou tapez le score', numHint: 'Votre estimation', bonusTitle: 'Questions bonus pour départager', endL: 'Message de fin (après validation)', fbT: 'Et si vous souhaitez nous suivre sur Facebook, c\u2019est ici : toutes nos soirées, nos jeux et nos surprises en avant-première !', fbBtn: 'Suivre LA BULL sur Facebook', builtIn: 'intégré'
},
en: {
  copy: `© ${YEAR} All rights reserved · Property of SKÅL / LA BULL`, appSub: 'Quizzes · Polls',
  scanToPlay: 'Scan the QR code displayed at the bar to take part.', hostSpace: 'Quiz master area',
  team: 'Your team name', solo: 'Your first & last name', name: 'Your first name', teamPh: 'E.g.: The Leprechauns', soloPh: 'E.g.: Mary Smith', namePh: 'E.g.: Mary',
  start: 'Let’s go!', q: 'Question', prev: '← Previous', next: 'Next →', recap: 'Summary', review: 'Check your answers',
  tapEdit: 'Tap an answer to change it.', missing: n => `${n} unanswered question(s)`, validate: 'Submit my answers',
  confirmV: 'Submit for good?', confirmVt: 'You won’t be able to change your answers.', yes: 'Yes, submit', no: 'Cancel',
  showQR: 'Show this QR code to the quiz master', locked: 'Answers submitted and locked ✔', results: 'Results and prize draw at the end of the game!',
  pollThanks: 'Thank you for taking part!', yourAns: 'Your answers', notFound: 'Not found', notFoundT: 'This QR code doesn’t match any game or poll. Ask the bar for the right QR code.',
  pin: 'Quiz master code', enter: 'Enter', badPin: 'Wrong code', back: '← Back', backS: 'Back', home: 'Home',
  homeT: 'Tap “QR to take part” to let people scan a quiz or a poll.', newQuiz: 'Create a quiz', newPoll: 'Create a poll',
  all: 'All', quizzes: 'Quizzes', polls: 'Polls', upcoming: 'Today and upcoming', past: 'Past', none: 'Nothing here yet.',
  kQuiz: '🧠 Quiz', kPoll: '📊 Poll', qCount: n => `${n} question(s)`, received: n => `${n} sheet(s) received`, participants: n => `${n} participant(s)`,
  playQR: 'QR to take part', recvS: 'Receive a sheet', ranking: 'Ranking', stats: 'Results', keyS: 'Questions & key', qsS: 'Questions',
  playHereS: 'Take part here', edit: 'Edit', dup: 'Duplicate', settings: 'Settings', lock: 'Lock', printS: 'Print',
  joinTitle: 'Scan to take part', printLine: 'Scan with your phone camera · Scannez avec l’appareil photo de votre téléphone',
  recvT: 'Receive a sheet', recvHow: 'Open your phone’s camera and point it at the QR code on the participant’s phone, then tap the link that appears: the sheet is saved automatically.',
  manual: 'Manual entry', manualT: 'Team name, then the answers in order (e.g. ACBBA…)', add: 'Add', close: 'Close',
  saved: 'Sheet saved', already: 'Sheet updated (already received)', score: 'Score', rankNow: r => `Current rank: #${r}`,
  pollSaved: 'Answer saved', seeStats: 'See the results', seeAns: 'See their answers in detail',
  noRes: 'No sheets received yet.', draw: 'Prize draw', drawTop: 'Among top score', drawAll: 'Among everyone', drawGo: 'Start the draw!', again: 'Draw again',
  details: 'Details', errOnly: 'Mistakes only', allQ: 'All questions', given: 'Answer given', good: 'Correct answer', noAns: 'No answer', errors: n => `${n} mistake(s)`, receivedAt: 'Received at',
  zeroT: 'Reset', zeroGame: 'Clear this game’s results', zeroAll: 'Reset everything (all games and polls)',
  zeroPin: 'Enter the quiz master code to confirm. Cleared results can’t be recovered.', zeroGo: 'Clear', zeroDone: 'Results reset',
  avg: 'Average', answers: n => `${n} answer(s)`, anonymous: 'Anonymous', byPerson: 'Answers per participant',
  tSingle: 'Single choice', tMulti: 'Multiple choice', tStars: '1 to 5 ★ rating', tText: 'Free answer',
  multiHint: 'Several answers allowed', starsHint: 'Tap a star', textHint: 'A few words (optional)', textPh: 'Your answer…',
  title: 'Title', subtitle: 'Tagline', date: 'Date', mode: 'Participation', modeTeam: 'Teams', modeSolo: 'Individual',
  anonL: 'Participants', anonY: 'Anonymous', anonN: 'With first name', color: 'Colour', questions: 'Questions', addQ: '+ Add a question',
  qType: 'Question type', correct: 'Tap the correct answer (green)', info: 'Fun fact for the answer key (optional)', qFr: 'Question in French', qEn: 'Question in English',
  optFr: 'Answer FR', optEn: 'Answer EN', addOpt: '+ answer', save: 'Save', del: 'Delete', delQ: 'Delete?', minQ: 'Add at least one complete question.',
  builtinRO: 'Built into the app: duplicate it to edit.', newPin: 'New quiz master code', pinSaved: 'Saved',
  export: 'Update the app file', exportT: 'Downloads a version of the app containing all your games and polls.',
  backup: 'Back up my creations (.json)', import: 'Import (.json)', baseL: 'Online app address', baseT: 'App opened offline: enter its web address (https://…) so the QR codes work.', baseOn: 'App online at:',
  offline: 'App not online yet: this QR code can’t be read.', tooLong: 'Too long to fit in the QR code: ask for it to be built into the app.',
  unknownGame: 'This sheet is for a game that isn’t on this phone.', mismatch: 'Warning: the number of questions doesn’t match.',
  camErr: 'Can’t open the camera here. Use the phone’s camera app.', scanning: 'Point at the participant’s QR code…',
  createdLocal: 'created on this phone', newProno: 'Prediction', kProno: '🏉 Prediction', pronosF: 'Predictions', create: 'Create', pronos: n => `${n} prediction(s)`,
  draw0: 'Draw', finalScore: 'Final score', enterOut: 'Enter the match result', editOut: 'Edit the match result', outHint: 'Fill in what you know: the ranking updates automatically.', saveOut: 'Save the result',
  trend: 'Prediction trend', tieRule: 'Tied on points: closest to the exact score wins, then closest on “number” questions.', ptsTitle: 'Scoring',
  ptsRule: 'Right winner (or draw): 3 pts · Right margin: +2 pts · Exact score: +5 pts · Each right bonus answer: +1 pt. Tie: closest to the exact score wins.',
  real: 'Actual result', optional: 'optional', pronoDone: 'Prediction saved! Ranking and prize draw after the match.', pronoSaved: 'Prediction saved', needScore: 'Please give at least the match score.',
  sport: 'Sport', rugby: 'Rugby', foot: 'Football', other: 'Other', teamAL: 'Team 1 (home)', teamBL: 'Team 2', time: 'Kick-off time',
  addFun: '✨ Add the fun bonus questions', allPronos: 'All predictions', alcohol: 'Alcohol abuse is dangerous for your health, drink responsibly.', homeQa: 'What are we running', homeQb: 'tonight', whoT: 'Who\u2019s playing?', whoS: 'Already signed up? Tap your name and enter your code. Otherwise, sign up.', newP: 'New player · Sign up', search: 'Search a name', skipId: 'Play without signing in', pinAsk: 'Enter your 4-digit code', pinBad: 'Wrong code', pinForgot: 'Forgot your code? Ask the quiz master at the bar.', yourPin: 'Your personal code:', pinKeep: 'Write it down! It lets you sign in next time for quizzes, polls and predictions. If you forget it, the quiz master can give you a new one.', pinOk: 'Got it, let\u2019s go!', alreadyReg: 'Already signed up? Sign in', playersT: 'Players', playersS: 'Signed-up players and their code. Tap •••• to see a code, or give a new one if forgotten.', resetPin: 'New code', newPinIs: 'New code to give the player:', savedHere: 'Saved straight into the results!', notYou: 'Not you? New player', nextPlayer: 'Next player on this phone', imported: n => `${n} entry(ies) played on this phone recovered`, changePl: 'Change player', doneB: 'Predictions made', sumT: 'All predictions', bestT: 'Best predictors', byMatch: 'Who predicted what', playerL: 'Player', exactL: 'exact score(s)', legend: 'Green: exact score · Gold: right winner · Red: wrong. Tap a row for details.', fetchBtn: 'Fetch results', fetching: 'Looking for results…', fetchedOk: 'New results found: updating!', fetchedNone: 'No new results online yet. They arrive automatically every evening; otherwise, enter the score.', fetchErr: 'Could not check (no connection?)', autoRes: 'Results updated automatically', homeQ: 'What are we running tonight?', nowL: 'Right now', nowNone: 'Nothing planned this week… shall we create something?', createQ: 'What do you want to create?', crQuiz: 'Questions with right answers, ranking and prize draw', crPoll: 'Opinions, votes, star ratings, free answers', crProno: 'One match or a whole round: scores, bonus questions, ranking', cancelS: 'Cancel', cancelQ: 'Cancel your entry?', cancelT: 'Your answers so far will be deleted.', cancelYes: 'Yes, cancel', fixAns: 'Correct my answers', fixT: 'If you correct after showing your QR, show the new QR to the quiz master: it will replace the old one.', fixYes: 'Correct', cancelEd: 'Discard changes?', cancelEdT: 'Nothing will be saved.', hubHost: 'One QR for every match: sign up, then pick matches', openHere: 'Open here', otherPronos: 'Predict other matches', hubT: 'LA BULL predictions', hubS: 'Pick your matches, give your scores, show your QR at the bar!', hubNone: 'No predictions open right now.', hubDone: '✅ Prediction sent · see my QR', hubGo: '▶ Predict', hello: n => `Hello ${n}!`, editMe: 'Edit / delete my details',
  regT: 'Sign up', regS: 'To take part and get your results. Free, no purchase necessary.', regName: 'First name or nickname', regHow: 'Get my results by', sms: 'Text', email: 'Email', regPhone: 'Mobile number', regMail: 'Email address',
  c1: 'I agree that LA BULL uses my first name and number / email only to send me the results of my predictions. (required)',
  c2: 'I also agree to receive LA BULL news and events. I can unsubscribe at any time (reply “STOP” or unsubscribe link). (optional)',
  c3: 'I am 15 or older. (required)', regGo: 'Sign me up', regBad: 'Please check your name, your number or email and the required boxes.',
  privT: '🔒 Your data', delMe: 'Delete my details from this phone', delDone: 'Details deleted',
  priv: 'Controller: LA BULL, 121 Rue des 2 Cèdres, 24500 Serres-et-Montguyard, France (SIRET 990 143 810 00010). Purpose: sending you the results of your predictions and, only if you tick the box, LA BULL news and events. Legal basis: your consent, which you can withdraw at any time. Your data is never sold or shared: it stays on LA BULL\u2019s quiz master phone. Retention: deleted at the latest 3 months after the end of the competition; for LA BULL news, 3 years after your last contact. You can ask for access, correction or deletion at the bar or on +33 7 68 11 79 87, and complain to the CNIL (cnil.fr). Free to play, no purchase necessary.',
  contactL: 'Contact', sendRes: 'Send their result', mkYes: 'accepts LA BULL news', mkNo: 'results only', csv: 'Contacts (CSV)',
  msgRes: (n, ti, p, pos, N) => `LA BULL · ${ti}: well done ${n}, you scored ${p} pts and finished #${pos} of ${N}! Thanks and see you soon at LA BULL.`, msgStop: 'Reply STOP to stop receiving messages.', matches: 'matches', ptsRuleM: 'For each match: right winner (or draw) 3 pts · right margin +2 pts · exact score +5 pts. Right bonus answer: +1 pt. Tie: closest to the exact scores wins. You don\u2019t have to predict every match.', funAdded: 'Bonus questions added', tNumber: 'Number', tYesNo: 'Yes / No', tScore: 'Match score', vs: 'vs',
  scoreHint: 'Tap + / − or type the score', numHint: 'Your guess', bonusTitle: 'Bonus questions to split ties', endL: 'End message (after submitting)', fbT: 'And if you\u2019d like to follow us on Facebook, it\u2019s right here: all our nights, games and surprises first!', fbBtn: 'Follow LA BULL on Facebook', builtIn: 'built in'
}};
let lang = LS.get('lb_lang', (navigator.language || 'fr').startsWith('fr') ? 'fr' : 'en');
const t = k => T[lang][k];
const L = o => (o && (o[lang] || o.fr || o.en)) || '';

/* ================= DATA ================= */
let BUILTIN = [];
try { BUILTIN = JSON.parse($('#games-data').textContent || '[]'); } catch (e) {}
const myGames = () => LS.get('lb_games', []);
const saveMyGames = a => LS.set('lb_games', a);
const allGames = () => { const m = myGames(); const ids = new Set(m.map(g => g.id)); return [...BUILTIN.filter(g => !ids.has(g.id)), ...m]; };
const findGame = id => allGames().find(g => g.id === id);
const isBuiltin = id => BUILTIN.some(g => g.id === id) && !myGames().some(g => g.id === id);
const kindOf = g => g.kind === 'poll' || g.kind === 'prono' ? g.kind : 'quiz';
const qType = (g, q) => kindOf(g) === 'quiz' ? 'single' : (q.type || 'single');
const LETTERS = 'ABCDEFGH';
const resKey = id => 'lb_res_' + id;
const getRes = id => LS.get(resKey(id), {});
const isHost = () => LS.get('lb_host', false) === true;

/* ================= ENCODING ================= */
const b64u = bytes => { let s = ''; bytes.forEach(b => s += String.fromCharCode(b)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64u = str => { str = str.replace(/-/g, '+').replace(/_/g, '/'); while (str.length % 4) str += '='; const s = atob(str); return Uint8Array.from(s, c => c.charCodeAt(0)); };
const enc = s => new TextEncoder().encode(s), dec = b => new TextDecoder().decode(b);
async function deflate(str) { const cs = new CompressionStream('deflate-raw'); const w = cs.writable.getWriter(); w.write(enc(str)); w.close(); return new Uint8Array(await new Response(cs.readable).arrayBuffer()); }
async function inflate(bytes) { const ds = new DecompressionStream('deflate-raw'); const w = ds.writable.getWriter(); w.write(bytes); w.close(); return dec(new Uint8Array(await new Response(ds.readable).arrayBuffer())); }
const ONLINE = /^https?:$/.test(location.protocol) && !/^(localhost|127\.|10\.|192\.168\.|\[)/.test(location.hostname);
const baseURL = () => { const b = (LS.get('lb_base', '') || '').trim(); return b && !ONLINE ? b.split('#')[0] : location.href.split('#')[0]; };
const qrUsable = () => ONLINE || /^https:\/\//.test((LS.get('lb_base', '') || '').trim());
function resultPayload(g, st) {
  if (kindOf(g) === 'quiz') return b64u(enc(['1', g.id, g.questions.length, st.a.map(a => a == null ? '-' : LETTERS[a]).join(''), st.team].join('|')));
  return b64u(enc(JSON.stringify({ v: 2, g: g.id, n: g.questions.length, p: st.pid, t: st.team || '', a: st.a, c: st.c || undefined })));
}
function parseResult(p) {
  const s = dec(unb64u(p));
  if (s[0] === '{') { const o = JSON.parse(s); return { g: o.g, n: o.n, a: o.a, t: o.t || '', p: o.p, c: o.c, v: 2 }; }
  const parts = s.split('|'); if (parts[0] !== '1') throw 0;
  return { g: parts[1], n: +parts[2], a: parts[3], t: parts.slice(4).join('|'), v: 1 };
}
async function joinURL(g) {
  if (isBuiltin(g.id)) return { url: baseURL() + '#j=' + encodeURIComponent(g.id), embedded: false };
  const slim = { id: g.id, k: kindOf(g), t: g.title, s: g.sub, e: g.end, sp: g.sport, tm: g.teams, ti: g.time, d: g.date, m: g.mode, an: !!g.anon, c: g.color, q: g.questions.map(q => [q.q.fr, q.q.en, q.type || 'single', (q.o || []).map(o => [o.fr, o.en])]) };
  const url = baseURL() + '#j=~' + b64u(await deflate(JSON.stringify(slim)));
  return { url, embedded: true, tooLong: url.length > 1800 };
}
async function gameFromHash(v) {
  if (v.startsWith('~')) {
    const s = JSON.parse(await inflate(unb64u(v.slice(1))));
    return { id: s.id, kind: s.k || 'quiz', title: s.t, sub: s.s, end: s.e, sport: s.sp, teams: s.tm, time: s.ti, date: s.d, mode: s.m, anon: s.an, color: s.c, questions: s.q.map(q => ({ q: { fr: q[0], en: q[1] }, type: q[2], o: q[3].map(o => ({ fr: o[0], en: o[1] })) })) };
  }
  return findGame(decodeURIComponent(v));
}

/* ================= QR ================= */
function qrSVG(text, ecl = 'M') {
  const q = new QRLib.QRCode(-1, QRLib.ECL[ecl]); q.addData(text); q.make();
  const n = q.getModuleCount(), m = 4; let d = '';
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) d += `M${c + m} ${r + m}h1v1h-1z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n + 2 * m} ${n + 2 * m}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#000"/></svg>`;
}

/* ================= UI HELPERS ================= */
const app = $('#app');
function setAcc(c) { document.documentElement.style.setProperty('--acc', c || '#f2b632'); }
function topBar(sub, big) {
  return `<header class="hdr2"><i class="lamp2"></i><i class="dart2"></i>
   <img class="rlogo" src="${LOGO}" alt="LA BULL"><div class="plank"><b>LA BULL</b><span>${esc(sub || t('appSub'))}</span></div>
   <div class="lang"><button data-lang="fr" class="${lang === 'fr' ? 'on' : ''}">FR</button><button data-lang="en" class="${lang === 'en' ? 'on' : ''}">EN</button></div></header>`;
}
const kindKey = g => isProno(g) ? 'prono' : kindOf(g) === 'poll' ? 'poll' : 'quiz';
const decoOf = g => { const s = (L(g.title) + ' ' + (g.id || '')).toLowerCase(); return /jazz|sax/.test(s) ? 'sax' : /stout|guinness|irl|rugby|xv-/.test(s) ? 'stout' : g.sport === 'foot' ? 'fball' : ''; };
const band = (k, title, sub) => `<div class="band"><i class="bic ic-${k}"></i><b>${esc(title)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}</div>`;
const navBar = () => `<div class="navb"><button class="btn ghost small" data-nav="back">← ${esc(t('backS'))}</button><button class="btn ghost small" data-nav="home">🏠 ${esc(t('home'))}</button></div>`;
const pBar = g => `<div class="navb"><button class="btn ghost small" data-nav="back">← ${esc(t('backS'))}</button><button class="btn ghost small" data-pcancel="${esc(g.id)}">✕ ${esc(t('cancelS'))}</button></div>`;
const backBar = () => `<div class="navb" style="position:static;background:none"><button class="btn ghost small" data-nav="back">← ${esc(t('backS'))}</button></div>`;
function fmtDate(s) { if (!s) return ''; try { return new Date(s + 'T12:00:00').toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); } catch (e) { return s; } }
const fmtTime = ts => new Date(ts).toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
function toast(msg, ok = true) { const d = document.createElement('div'); d.className = 'toast'; if (!ok) d.style.background = 'var(--bad)'; d.textContent = msg; document.body.appendChild(d); setTimeout(() => d.remove(), 2600); }
function modal(html, onMount) { const m = document.createElement('div'); m.className = 'modal'; m.innerHTML = `<div class="card">${html}</div>`; document.body.appendChild(m); m.addEventListener('click', e => { if (e.target === m) m.remove(); }); onMount && onMount(m); return m; }
function confirmBox(title, text, yes, cb, danger) {
  modal(`<h3>${esc(title)}</h3><p class="muted">${esc(text || '')}</p><div class="row" style="margin-top:14px"><button class="btn ghost small" data-x>${esc(t('no'))}</button><button class="btn small ${danger ? 'danger' : ''}" data-y>${esc(yes)}</button></div>`,
    m => { m.querySelector('[data-x]').onclick = () => m.remove(); m.querySelector('[data-y]').onclick = () => { m.remove(); cb(); }; });
}
function pinConfirm(title, cb) {
  modal(`<h3>⚠️ ${esc(title)}</h3><p class="muted" style="font-size:14px">${esc(t('zeroPin'))}</p><input class="in big-in" id="zp" type="password" inputmode="numeric" maxlength="8" placeholder="••••">
   <div class="row" style="margin-top:12px"><button class="btn ghost small" data-x>${esc(t('no'))}</button><button class="btn danger small" data-y>${esc(t('zeroGo'))}</button></div>`, m => {
    const inp = m.querySelector('#zp'); inp.focus();
    const ok = () => { if (inp.value === LS.get('lb_pin', '0901')) { m.remove(); cb(); } else { inp.value = ''; toast(t('badPin'), false); } };
    m.querySelector('[data-x]').onclick = () => m.remove(); m.querySelector('[data-y]').onclick = ok; inp.onkeydown = e => { if (e.key === 'Enter') ok(); };
  });
}
function confetti() { const cols = ['#f2b632', '#3ccf7a', '#ff6b5e', '#4ea8ff', '#fff']; for (let i = 0; i < 90; i++) { const c = document.createElement('i'); c.className = 'conf'; c.style.left = Math.random() * 100 + 'vw'; c.style.background = cols[i % cols.length]; c.style.animationDuration = 1.8 + Math.random() * 1.8 + 's'; c.style.animationDelay = Math.random() * .6 + 's'; document.body.appendChild(c); setTimeout(() => c.remove(), 4500); } }
document.addEventListener('click', e => {
  const b = e.target.closest('[data-lang]'); if (b) { lang = b.dataset.lang; LS.set('lb_lang', lang); route(); return; }
  const pc = e.target.closest('[data-pcancel]');
  if (pc) { const id = pc.dataset.pcancel; return confirmBox(t('cancelQ'), t('cancelT'), t('cancelYes'), () => { LS.del('lb_play_' + id); const g = findGame(id); if (g && kindOf(g) === 'prono' && LS.get('lb_me', null)) go('p'); else { location.hash = 'j=' + encodeURIComponent(id); route(); } }, true); }
  const n = e.target.closest('[data-nav]'); if (n) { if (n.dataset.nav === 'home') go(''); else if (history.length > 1) history.back(); else go(''); }
});

/* ================= ROUTING ================= */
async function route() {
  document.querySelectorAll('.modal,.full').forEach(m => m.remove());
  window.scrollTo(0, 0);
  if (isHost()) importLocalPlays();
  $('#copy').innerHTML = `<i class="stad"></i><i class="fb1"></i><i class="golf"></i><a class="tel" href="tel:+33768117987">📞 07 68 11 79 87</a><p class="cr">${esc(t('copy'))}</p><p class="cr2">SIRET : 990 143 810 00010 · ${esc(t('alcohol'))}</p>`; document.documentElement.lang = lang;
  const h = location.hash.slice(1); const [k, ...rest] = h.split('='); const v = rest.join('=');
  try {
    if (k === 'j' && v) { const g = await gameFromHash(v); return g ? playerStart(g) : notFound(); }
    if (k === 'p') return pronoHub();
    if (k === 'r' && v) return receive(v);
    if (k === 'admin' || k === 'h') return hostRoute(v);
  } catch (e) { console.error(e); return notFound(); }
  setAcc();
  if (!isHost()) return pinScreen(() => hostHome(), true);
  hostHome();
}
window.addEventListener('hashchange', route);
const go = h => { if (location.hash.slice(1) === h) route(); else location.hash = h; };
function notFound() { setAcc(); app.innerHTML = topBar() + backBar() + `<div class="card center"><h2>${esc(t('notFound'))}</h2><p class="muted">${esc(t('notFoundT'))}</p></div>`; }

/* ================= PARTICIPANT ================= */
const pkey = g => 'lb_play_' + g.id;
const $team = g => kindOf(g) === 'quiz' && g.mode !== 'solo';
function playerStart(g) {
  setAcc(g.color);
  let st = LS.get(pkey(g), null);
  if (st && st.done && isHost()) { saveLocalPlay(g, st); LS.del(pkey(g)); st = null; }
  if (st && st.done) return playerDone(g, st);
  if (st && st.started) return playerQ(g, st);
  const named = isProno(g) || !(kindOf(g) === 'poll' && g.anon);
  if (isProno(g) && !getMe()) return identifyScreen(() => playerStart(g));
  if (named && !isProno(g) && !getMe() && Object.keys(getPlayers()).length && !LS.get('lb_skipid', false)) return identifyScreen(() => playerStart(g), true);
  LS.del('lb_skipid');
  const me = named ? getMe() : null;
  const poll = kindOf(g) === 'poll', prono = isProno(g), askName = poll ? !g.anon : true;
  const lab = poll || (prono && g.mode !== 'team') ? 'name' : (g.mode === 'solo' ? 'solo' : 'team'), ph = lab === 'name' ? 'namePh' : lab === 'solo' ? 'soloPh' : 'teamPh';
  const sqs = prono ? scoreQs(g) : [];
  const head = !prono ? '' : g.teams ? `<div class="card center" style="margin-top:14px"><p style="margin:0;font-size:40px">${SPORT_ICON[g.sport] || '🏆'}</p><p class="gtitle" style="color:var(--gold2);font-size:30px;margin:4px 0">${esc(teamA(g))}<br><span style="font-size:20px;color:var(--cream)">${esc(t('vs'))}</span><br>${esc(teamB(g))}</p>
     <p class="muted" style="margin:6px 0 0">${esc(fmtDate(g.date))}${g.time ? ' · ' + esc(g.time) : ''}</p></div><p class="muted center" style="font-size:13px">📏 ${esc(t('ptsRule'))}</p>`
     : `<div class="card" style="margin-top:14px"><p style="margin:0 0 6px;font-size:34px;text-align:center">${SPORT_ICON[g.sport] || '🏆'}</p>${sqs.map(([q]) => `<p style="margin:6px 0;font-weight:700;font-size:16px;display:flex;justify-content:space-between;gap:8px"><span>${esc(qA(g, q))} – ${esc(qB(g, q))}</span><span class="muted" style="font-weight:400;font-size:13px;white-space:nowrap">${esc(L(q.when) || '')}</span></p>`).join('')}</div><p class="muted center" style="font-size:13px">📏 ${esc(t('ptsRuleM'))}</p>`;
  app.innerHTML = topBar(g.date ? fmtDate(g.date) : '') + backBar() + `<div class="hero"><img src="${LOGO}" alt="LA BULL" style="width:${prono ? 110 : 160}px"><p style="margin:12px 0 0"><span class="kind">${esc(prono ? t('kProno') : poll ? t('kPoll') : t('kQuiz'))}</span></p><h1 style="margin-top:6px">${esc(L(g.title))}</h1>
   <p class="muted" style="font-size:17px">${esc(L(g.sub))}</p>${prono ? '' : `<p><span class="pill">${esc(t('qCount')(g.questions.length))}</span>${g.date ? ` <span class="pill">${esc(fmtDate(g.date))}</span>` : ''}</p>`}</div>${head}
   <div class="card">${me ? `<p class="center" style="margin:0 0 4px;font-weight:700">👤 ${esc(me.name)} · <span class="muted" style="font-weight:400">${esc(maskV(me))}</span></p><button class="btn ghost small" id="chg2" style="width:100%;margin:6px 0 0">👤 ${esc(t('notYou'))}</button>${kindOf(g) === 'quiz' && g.mode !== 'solo' ? `<label class="f" for="team">${esc(t('team'))}</label><input class="in big-in" id="team" maxlength="40" autocomplete="off" placeholder="${esc(t('teamPh'))}">` : ''}` : askName ? `<label class="f" for="team">${esc(t(lab))}</label><input class="in big-in" id="team" maxlength="40" autocomplete="off" placeholder="${esc(t(ph))}">` : `<p class="center muted" style="margin:0 0 4px">🔒 ${esc(t('anonymous'))}</p>`}
   <div style="margin-top:14px">${!me && askName ? `<button class="btn ghost small" id="idf" style="width:100%;margin-top:10px">👤 ${esc(t('alreadyReg'))}</button>` : ''}<button class="btn acc" id="go" style="margin-top:10px" ${askName && (!me || $team(g)) ? 'disabled' : ''}>${esc(t('start'))}</button></div></div>${me ? `<button class="btn ghost small" style="width:100%;margin-top:6px" onclick="location.hash='p'">← ${esc(t('allPronos'))}</button>` : ''}`;
  const inp = $('#team'), b = $('#go');
  if ($('#idf')) $('#idf').onclick = () => identifyScreen(() => playerStart(g));
  if (inp) inp.oninput = () => b.disabled = !inp.value.trim();
  b.onclick = () => { const s = { started: true, c: me ? { m: me.m, v: me.v, mk: me.mk, l: lang, at: me.at, n: me.name, p: me.pin } : undefined, team: inp && inp.value.trim() ? inp.value.trim() : me ? me.name : '', pid: 'p' + Math.random().toString(36).slice(2, 9), a: Array(g.questions.length).fill(null), i: 0 }; LS.set(pkey(g), s); playerQ(g, s); };
  if ($('#chg2')) $('#chg2').onclick = () => { LS.del('lb_me'); identifyScreen(() => playerStart(g), !isProno(g)); };
}
function answered(v) { return v != null && !(Array.isArray(v) && (!v.length || v.some(x => x == null))) && v !== ''; }
function playerQ(g, st) {
  const n = g.questions.length, i = st.i;
  if (i >= n) return playerRecap(g, st);
  const q = g.questions[i], ty = qType(g, q), save = () => LS.set(pkey(g), st);
  const advance = () => setTimeout(() => { if (st.i === i) { st.i = i + 1; save(); playerQ(g, st); } }, 320);
  let body = '';
  if (ty === 'single') body = q.o.map((o, j) => `<button class="opt ${st.a[i] === j ? 'sel' : ''}" data-o="${j}"><span class="L">${LETTERS[j]}</span><span>${esc(L(o))}</span></button>`).join('');
  if (ty === 'multi') body = `<p class="muted" style="margin-top:-8px">${esc(t('multiHint'))}</p>` + q.o.map((o, j) => `<button class="opt ${(st.a[i] || []).includes(j) ? 'sel' : ''}" data-m="${j}"><span class="chk">${(st.a[i] || []).includes(j) ? '✓' : ''}</span><span>${esc(L(o))}</span></button>`).join('');
  if (ty === 'stars') body = `<p class="muted center" style="margin-top:-8px">${esc(t('starsHint'))}</p><div class="stars">${[1, 2, 3, 4, 5].map(k => `<button data-s="${k}" class="${(st.a[i] || 0) >= k ? 'on' : ''}">⭐</button>`).join('')}</div>`;
  if (ty === 'score') body = `<p class="muted center" style="margin-top:-8px">${esc(t('scoreHint'))}${scoreQs(g).length > 1 ? ' · ' + esc(t('optional')) : ''}</p><div style="display:flex;gap:8px">${stepper('a', st.a[i] ? st.a[i][0] : null, qA(g, q))}${stepper('b', st.a[i] ? st.a[i][1] : null, qB(g, q))}</div>`;
  if (ty === 'number') body = `<p class="muted center" style="margin-top:-8px">${esc(t('numHint'))}${isProno(g) ? ' · ' + esc(t('optional')) : ''}</p><div style="display:flex">${stepper('n', st.a[i], '')}</div>`;
  if (ty === 'single' && isProno(g)) body = `<p class="muted" style="margin-top:-8px">${esc(t('optional'))}</p>` + body;
  if (ty === 'text') body = `<p class="muted" style="margin-top:-8px">${esc(t('textHint'))}</p><textarea class="in" id="tx" maxlength="80" placeholder="${esc(t('textPh'))}" style="min-height:110px;font-size:18px">${esc(st.a[i] || '')}</textarea>`;
  app.innerHTML = topBar(st.team || t('anonymous')) + pBar(g) + `<div class="row" style="justify-content:space-between"><span class="qnum" style="flex:none">${esc(t('q'))} ${i + 1}/${n}</span><span class="pill" style="flex:none;max-width:60%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(L(g.title))}</span></div>
   <div class="prog"><i style="width:${(i + 1) / n * 100}%"></i></div><div class="qtext">${esc(L(q.q))}</div>${body}
   <div class="nav"><button class="btn ghost" id="pv" ${i === 0 ? 'disabled' : ''}>${esc(t('prev'))}</button><button class="btn acc" id="nx">${esc(i === n - 1 ? t('recap') : t('next'))}</button></div>`;
  app.querySelectorAll('[data-o]').forEach(b => b.onclick = () => { st.a[i] = +b.dataset.o; save(); app.querySelectorAll('[data-o]').forEach(x => x.classList.toggle('sel', x === b)); advance(); });
  app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { const j = +b.dataset.m; const cur = new Set(st.a[i] || []); cur.has(j) ? cur.delete(j) : cur.add(j); st.a[i] = [...cur].sort(); save(); b.classList.toggle('sel', cur.has(j)); b.querySelector('.chk').textContent = cur.has(j) ? '✓' : ''; });
  app.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { st.a[i] = +b.dataset.s; save(); app.querySelectorAll('[data-s]').forEach(x => x.classList.toggle('on', +x.dataset.s <= st.a[i])); advance(); });
  const tx = $('#tx'); if (tx) tx.oninput = () => { st.a[i] = tx.value.slice(0, 80); save(); };
  const sv = id => { const el = app.querySelector(`[data-sv="${id}"]`); return el && el.value !== '' ? Math.max(0, Math.min(999, parseInt(el.value, 10) || 0)) : null; };
  const syncS = () => { if (ty === 'score') { const x = sv('a'), y = sv('b'); st.a[i] = [x, y]; } if (ty === 'number') st.a[i] = sv('n'); save(); };
  app.querySelectorAll('[data-st]').forEach(b => b.onclick = () => { const el = app.querySelector(`[data-sv="${b.dataset.st}"]`); el.value = Math.max(0, (parseInt(el.value, 10) || 0) + +b.dataset.d); if (ty === 'score') app.querySelectorAll('[data-sv]').forEach(x => { if (x.value === '') x.value = 0; }); syncS(); });
  app.querySelectorAll('[data-sv]').forEach(el => el.oninput = syncS);
  $('#pv').onclick = () => { st.i = Math.max(0, i - 1); save(); playerQ(g, st); };
  $('#nx').onclick = () => { st.i = i + 1; save(); playerQ(g, st); };
  window.scrollTo(0, 0);
}
function ansLabel(g, q, v, short) {
  const ty = qType(g, q);
  if (!answered(v)) return '–';
  if (ty === 'single') return short ? LETTERS[v] : `${LETTERS[v]} — ${L(q.o[v])}`;
  if (ty === 'multi') return short ? v.map(j => LETTERS[j]).join('') : v.map(j => L(q.o[j])).join(', ');
  if (ty === 'stars') return '★'.repeat(v);
  if (ty === 'score') return `${v[0]} – ${v[1]}`;
  if (ty === 'number') return String(v);
  return short ? '✎' : v;
}
function playerRecap(g, st) {
  const miss = st.a.filter(x => !answered(x)).length, quiz = kindOf(g) === 'quiz';
  const grid = quiz ? `<div class="grid" style="margin:14px 0">${st.a.map((a, i) => `<button class="tile ${a == null ? 'empty' : ''}" data-i="${i}"><b>${a == null ? '?' : LETTERS[a]}</b><small>${i + 1}</small></button>`).join('')}</div>`
    : g.questions.map((q, i) => `<button class="opt" data-i="${i}" style="display:block;font-size:15px;${answered(st.a[i]) ? '' : 'border-color:var(--bad)'}"><span class="muted" style="font-size:13px;display:block">${i + 1}. ${esc(L(q.q))}</span><b>${esc(ansLabel(g, q, st.a[i]))}</b></button>`).join('');
  app.innerHTML = topBar(st.team || t('anonymous')) + pBar(g) + `<h2>${esc(t('review'))}</h2><p class="muted">${esc(t('tapEdit'))}</p>${grid}
   ${miss ? `<p style="color:var(--bad);font-weight:700">⚠️ ${esc(t('missing')(miss))}</p>` : ''}<button class="btn acc" id="val" style="margin-top:10px">${esc(t('validate'))}</button>`;
  app.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { st.i = +b.dataset.i; LS.set(pkey(g), st); playerQ(g, st); });
  $('#val').onclick = () => {
    const sq = isProno(g) ? scoreQs(g) : [];
    if (sq.length && !sq.some(([, i]) => answered(st.a[i]))) { toast(t('needScore'), false); st.i = sq[0][1]; LS.set(pkey(g), st); return playerQ(g, st); }
    confirmBox(t('confirmV'), t('confirmVt'), t('yes'), () => { st.done = true; st.ts = Date.now(); LS.set(pkey(g), st); playerDone(g, st); });
  };
  window.scrollTo(0, 0);
}
function saveLocalPlay(g, st) {
  try { const r = parseResult(resultPayload(g, st)); const all = getRes(g.id); const k = (r.t.trim() + (r.c ? '|' + r.c.v : '')).toLowerCase();
    if (kindOf(g) === 'poll') { if (all[r.p]) return false; } else if (all[k] && JSON.stringify(all[k].a) === JSON.stringify(r.a)) return false;
    storeResult(g, r); return true; } catch (e) { return false; }
}
function importLocalPlays() {
  let n = 0;
  try { Object.keys(localStorage).filter(k => k.startsWith('lb_play_')).forEach(k => { const st = LS.get(k, null), g = findGame(k.slice(8)); if (st && st.done && g && saveLocalPlay(g, st)) n++; }); } catch (e) {}
  return n;
}
function newPlayer() {
  try { Object.keys(localStorage).filter(k => k.startsWith('lb_play_')).forEach(k => localStorage.removeItem(k)); } catch (e) {}
  LS.del('lb_me');
}
function playerDone(g, st) {
  const here = isHost(); if (here) saveLocalPlay(g, st);
  const lastMe = here ? getMe() : null; if (here) LS.del('lb_me');
  const url = baseURL() + '#r=' + resultPayload(g, st), poll = kindOf(g) === 'poll';
  app.innerHTML = topBar(st.team || t('anonymous')) + backBar() + `<div class="center"><p style="color:var(--ok);font-weight:700;margin-top:4px">${esc(t('locked'))}</p>
   ${here ? `<div class="card center" style="box-shadow:inset 0 0 0 3px var(--ok)"><p style="font-size:40px;margin:0">✅</p><p class="chalk" style="font-size:28px;margin:4px 0">${esc(t('savedHere'))}</p><button class="btn" id="np" style="margin-top:8px">👤 ${esc(t('nextPlayer'))}</button><button class="btn ghost small" id="bkh" style="width:100%;margin-top:8px">🏠 ${esc(t('hostSpace'))}</button></div>` : `<h1 style="font-size:30px">${esc(t('showQR'))}</h1><div class="qrbox">${qrSVG(url, 'M')}</div>`}<button class="btn ghost small" id="fix" style="width:100%;margin-top:18px">✏️ ${esc(t('fixAns'))}</button><p class="muted" style="font-size:12px;margin:4px 0 0">${esc(t('fixT'))}</p>
   ${st.team ? `<h2 style="margin-top:14px;color:var(--cream);text-transform:none;font-family:var(--body);font-weight:700;font-size:24px">${esc(st.team)}</h2>` : ''}
   <p class="muted">${esc(L(g.title))}</p>${isProno(g) && (getMe() || lastMe) ? `<button class="btn" id="oth" style="margin:10px 0">${SPORT_ICON.foot}${SPORT_ICON.rugby} ${esc(t('otherPronos'))}</button>` : ''}<div class="card"><p class="chalk" style="font-size:27px;line-height:1.15;margin:0">${poll ? '🙏 ' + esc(L(g.end) || t('pollThanks')) : isProno(g) ? '🏆 ' + esc(L(g.end) || t('pronoDone')) : '🎁 ' + esc(t('results'))}</p></div>
   ${poll && g.fb && (st.a[g.fb.q] == null || g.fb.show.includes(st.a[g.fb.q])) ? `<div class="card"><p style="font-weight:700;margin-top:0;font-size:17px">${esc(t('fbT'))}</p><a class="btn fb" href="${esc(g.fb.url)}" target="_blank" rel="noopener">👍 ${esc(t('fbBtn'))}</a></div>` : ''}</div>`;
  $('#fix').onclick = () => confirmBox(t('fixAns'), t('fixT'), t('fixYes'), () => { st.done = false; st.i = g.questions.length; LS.set(pkey(g), st); playerRecap(g, st); });
  if ($('#np')) $('#np').onclick = () => { newPlayer(); if (isProno(g)) go('p'); else { location.hash = 'j=' + encodeURIComponent(g.id); route(); } };
  if ($('#bkh')) $('#bkh').onclick = () => go('');
  if ($('#oth')) $('#oth').onclick = () => { if (lastMe) setMe(lastMe); go('p'); };
}

/* ================= HOST ================= */
function pinScreen(next, entry) {
  setAcc();
  app.innerHTML = topBar() + (entry ? `<div class="hero"><img src="${LOGO}" alt="LA BULL"><h1 style="color:var(--gold)">LA BULL</h1><p class="muted" style="margin:0">${esc(t('appSub'))}</p></div>` : navBar()) +
   `<div class="card"><h2 style="margin-top:0">${esc(t('hostSpace'))}</h2><label class="f" for="pin">${esc(t('pin'))}</label>
   <input class="in big-in" id="pin" type="password" inputmode="numeric" maxlength="8" placeholder="••••"><button class="btn" id="ok" style="margin-top:10px">${esc(t('enter'))}</button></div>
   ${entry ? `<p class="center muted" style="margin-top:18px">${esc(t('scanToPlay'))}</p>` : ''}`;
  const ok = () => { if ($('#pin').value === LS.get('lb_pin', '0901')) { LS.set('lb_host', true); next(); } else { toast(t('badPin'), false); $('#pin').value = ''; } };
  $('#ok').onclick = ok; $('#pin').onkeydown = e => { if (e.key === 'Enter') ok(); };
}
function hostRoute(v) {
  if (!isHost()) return pinScreen(() => hostRoute(v));
  const [view, id, extra] = (v || '').split(':'); const g = id && findGame(id);
  if (view === 'team' && g) return isProno(g) ? hostPronoTeam(g, decodeURIComponent(extra || '')) : hostTeam(g, decodeURIComponent(extra || ''));
  if (view === 'rank' && g) return kindOf(g) === 'poll' ? hostStats(g) : isProno(g) ? hostProno(g) : hostRank(g);
  if (view === 'out' && g) return hostOutcome(g);
  if (view === 'key' && g) return hostKey(g);
  if (view === 'edit') return hostEdit(id ? findGame(id) : null, extra);
  if (view === 'settings') return hostSettings();
  if (view === 'list') return hostList(id || 'now');
  if (view === 'create') return hostCreate();
  if (view === 'sum') return hostPronoSummary();
  if (view === 'players') return hostPlayers();
  hostHome();
}
function scoreOf(g, a) { let s = 0; for (let i = 0; i < g.questions.length; i++) if (a[i] && LETTERS.indexOf(a[i]) === g.questions[i].a) s++; return s; }
function ranked(g) { return Object.values(getRes(g.id)).map(r => ({ ...r, s: scoreOf(g, r.a) })).sort((x, y) => y.s - x.s || x.ts - y.ts); }

const typeLabel = ty => t(ty === 'single' ? 'tSingle' : ty === 'multi' ? 'tMulti' : ty === 'stars' ? 'tStars' : ty === 'text' ? 'tText' : ty === 'score' ? 'tScore' : 'tNumber');
const kindIcon = g => isProno(g) ? (SPORT_ICON[g.sport] || '🏆') : kindOf(g) === 'poll' ? '📊' : '🧠';
const todayISO = () => new Date().toISOString().slice(0, 10);
const plusDays = n => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10);
const isActive = g => { const s = g.date || '', e = g.until || g.date || ''; return !s || (e >= todayISO() && s <= plusDays(7)); };
function hostCard(g) {
  const n = Object.keys(getRes(g.id)).length, c = esc(g.color || '#f6b81e'), id = esc(g.id), k = kindOf(g), dc = decoOf(g);
  const kl = k === 'poll' ? t('kPoll') : k === 'prono' ? t('kProno') : t('kQuiz');
  const meta = [g.date ? fmtDate(g.date) + (g.time ? ' · ' + g.time : '') : '', isProno(g) ? '' : t('qCount')(g.questions.length)].filter(Boolean).join(' · ');
  const resL = k === 'poll' ? t('stats') : k === 'prono' ? t('pronosF') : t('ranking');
  return `<div class="ncard" style="--c:${c}">${dc ? `<i class="deco deco-${dc}"></i>` : ''}
    <div class="hc-h"><span class="hc-ic"><i class="ic-${kindKey(g)}"></i></span><div class="hc-t"><small>${esc(kl.replace(/^\S+\s/, ''))}${isBuiltin(g.id) ? '' : ' · ' + esc(t('createdLocal'))}</small><b>${esc(gTitle(g))}</b><span>${esc(meta)}</span></div></div>
    <div class="row nbtns"><button class="btn" data-a="qr" data-g="${id}">▦ QR</button><button class="btn cbtn" data-a="rank" data-g="${id}" style="position:relative">🏆 ${esc(resL)}${n ? `<em class="cnt">${n}</em>` : ''}</button></div></div>
    <div class="plankbar"><button data-a="recv" data-g="${id}"><i>📩</i>${esc(t('recvS'))}</button>
      ${k === 'prono' ? `<button data-a="out" data-g="${id}"><i>📝</i>${esc(t('finalScore'))}</button>` : `<button data-a="key" data-g="${id}"><i>📋</i>${esc(k === 'quiz' ? t('keyS') : t('qsS'))}</button>`}
      <button data-a="here" data-g="${id}"><i>▶️</i>${esc(t('playHereS'))}</button><button data-a="edit" data-g="${id}"><i>✏️</i>${esc(isBuiltin(g.id) ? t('dup') : t('edit'))}</button></div>`;
}
function bindCards() {
  app.querySelectorAll('[data-a]').forEach(b => b.onclick = () => {
    const g = findGame(b.dataset.g), a = b.dataset.a;
    if (a === 'qr') return showQR(g);
    if (a === 'recv') return receiveHelp(g);
    if (a === 'rank') return go('admin=rank:' + g.id);
    if (a === 'key') return go('admin=key:' + g.id);
    if (a === 'out') return go('admin=out:' + g.id);
    if (a === 'here') return go('j=' + encodeURIComponent(g.id));
    if (a === 'edit') {
      if (isBuiltin(g.id)) { const c = JSON.parse(JSON.stringify(g)); c.id = 'g-' + Date.now().toString(36); c.title.fr += ' (copie)'; c.title.en += ' (copy)'; saveMyGames([...myGames(), c]); return go('admin=edit:' + c.id); }
      return go('admin=edit:' + g.id);
    }
  });
}
function hubCard() {
  return `<div class="ncard" style="--c:#1c8cff"><i class="deco deco-fball"></i><div class="hc-h"><span class="hc-ic"><i class="ic-prono"></i></span><div class="hc-t"><small>${esc(t('pronosF'))}</small><b>${esc(t('hubT'))}</b><span>${esc(t('hubHost'))}</span></div></div>
     <div class="row nbtns"><button class="btn" id="hubqr">▦ QR</button><button class="btn cbtn" id="hubgo">▶ ${esc(t('openHere'))}</button></div></div>`;
}
function bindHub() {
  if (!$('#hubgo')) return;
  $('#hubgo').onclick = () => go('p');
  $('#hubqr').onclick = () => { const url = baseURL() + '#p'; const f = document.createElement('div'); f.className = 'full';
    f.innerHTML = `<button class="btn small x">✕</button><img src="${LOGO}" style="width:80px;border-radius:14px"><h1 style="color:#1c5fd1">${SPORT_ICON.foot}${SPORT_ICON.rugby} ${esc(t('hubT'))}</h1>${qrSVG(url, 'M')}<p style="font-weight:700;font-size:20px;margin:0">${esc(T.fr.joinTitle)} · ${esc(T.en.joinTitle)}</p><button class="btn ghost small" data-here style="width:min(88vw,420px)">▶ ${esc(t('openHere'))}</button>`;
    f.querySelector('.x').onclick = () => f.remove(); f.querySelector('[data-here]').onclick = () => { f.remove(); go('p'); }; document.body.appendChild(f); };
}
function hostHome() {
  setAcc();
  const all = allGames(), act = all.filter(isActive).sort((a, b) => ((a.date || '0') + (a.time || '')).localeCompare((b.date || '0') + (b.time || '')));
  const cnt = k => all.filter(g => kindOf(g) === k).length;
  const cat = (k, ic, lab, n, col) => { const w = lab.split(' '), last = w.pop(); return `<button class="cat cat-${k}" data-cat="${k}" style="--c:${col}"><em>${n}</em><b>${w.length ? esc(w.join(' ')) + ' ' : ''}<span>${esc(last)}</span></b></button>`; };
  app.innerHTML = topBar('', true) + backBar() + `<div class="homehead"><p class="brush">${esc(t('homeQa'))} <em>${esc(t('homeQb'))}</em> ?</p><button class="brushbtn" id="cr">+ ${esc(t('create'))}</button></div>
   <div class="cats">${cat('now', '🔥', t('nowL'), act.length, '#e2453a')}${cat('quiz', '🧠', t('quizzes'), cnt('quiz'), '#f6b81e')}${cat('poll', '📊', t('polls'), cnt('poll'), '#3b8bff')}${cat('prono', SPORT_ICON.foot + SPORT_ICON.rugby, t('pronosF'), cnt('prono'), '#2fbf6b')}</div>
   <button class="bar2" id="sumh"><i>📅</i><span>${esc(t('doneB'))}</span><b>›</b></button><button class="bar2" id="plh"><i>👥</i><span>${esc(t('playersT'))}</span><b>›</b></button>
   ${band('now', t('nowL'), '')}${act.length ? act.map(hostCard).join('') : `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('nowNone'))}</p></div>`}
   <div class="row" style="margin-top:14px"><button class="btn ghost small" id="set">⚙️ ${esc(t('settings'))}</button><button class="btn ghost small" id="out">🔒 ${esc(t('lock'))}</button></div>`;
  app.querySelectorAll('[data-cat]').forEach(b => b.onclick = () => go('admin=list:' + b.dataset.cat));
  $('#cr').onclick = () => go('admin=create');
  $('#sumh').onclick = () => go('admin=sum');
  $('#plh').onclick = () => go('admin=players');
  bindCards();
  $('#set').onclick = () => go('admin=settings');
  $('#out').onclick = () => { LS.set('lb_host', false); go(''); };
}
function hostList(cat) {
  setAcc();
  const today = todayISO();
  const gs = allGames().filter(g => cat === 'now' ? isActive(g) : kindOf(g) === cat);
  const up = gs.filter(g => !g.date || (g.until || g.date) >= today).sort((a, b) => ((a.date || '0') + (a.time || '')).localeCompare((b.date || '0') + (b.time || '')));
  const past = gs.filter(g => g.date && (g.until || g.date) < today).sort((a, b) => b.date.localeCompare(a.date));
  const title = { now: '🔥 ' + t('nowL'), quiz: '🧠 ' + t('quizzes'), poll: '📊 ' + t('polls'), prono: SPORT_ICON.foot + SPORT_ICON.rugby + ' ' + t('pronosF') }[cat];
  app.innerHTML = topBar(t('hostSpace')) + navBar() + band(cat, { now: t('nowL'), quiz: t('quizzes'), poll: t('polls'), prono: t('pronosF') }[cat], up.length ? t('upcoming') : '') + `
   ${cat === 'prono' ? hubCard() + `<button class="btn" id="sumb" style="margin-bottom:10px">📋 ${esc(t('doneB'))}</button><button class="btn ghost small" id="frall" style="width:100%">🔄 ${esc(t('fetchBtn'))}</button>` : ''}
   ${up.map(hostCard).join('')}${past.length ? `<p class="sec">${esc(t('past'))}</p>` + past.map(hostCard).join('') : ''}
   ${!gs.length ? `<div class="card center"><p class="chalk" style="font-size:24px;margin:0">${esc(t('none'))}</p></div>` : ''}
   ${cat !== 'now' ? `<button class="btn ghost small" id="cr2" style="width:100%;margin-top:10px">➕ ${esc(t('create'))} · ${esc({ quiz: t('quizzes'), poll: t('polls'), prono: t('pronosF') }[cat])}</button>` : ''}`;
  bindCards(); bindHub();
  if ($('#frall')) $('#frall').onclick = () => fetchResults(null);
  if ($('#sumb')) $('#sumb').onclick = () => go('admin=sum');
  if ($('#cr2')) $('#cr2').onclick = () => go('admin=edit::' + cat);
}
function hostCreate() {
  setAcc();
  const ch = (k, ic, lab, desc, col) => `<button class="card cre" data-k="${k}" style="border-left:10px solid ${col}"><i>${ic}</i><span><b class="chalk" style="color:${col}">${esc(lab)}</b><small>${esc(desc)}</small></span></button>`;
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 class="chalkh">➕ ${esc(t('createQ'))}</h1>` +
    ch('quiz', '🧠', t('quizzes').replace(/zes$/, ''), t('crQuiz'), '#f6b81e') + ch('poll', '📊', t('kPoll').replace(/^\S+\s/, ''), t('crPoll'), '#3b8bff') + ch('prono', SPORT_ICON.rugby, t('newProno'), t('crProno'), '#2fbf6b');
  app.querySelectorAll('[data-k]').forEach(b => b.onclick = () => go('admin=edit::' + b.dataset.k));
}

async function showQR(g) {
  const j = await joinURL(g);
  const f = document.createElement('div'); f.className = 'full';
  f.innerHTML = `<button class="btn small x">✕</button><img src="${LOGO}" style="width:80px;border-radius:14px"><h1 style="color:${esc(g.color || '#1a1008')}">${esc(L(g.title))}</h1>${qrSVG(j.url, j.embedded ? 'L' : 'M')}
   <p style="font-weight:700;font-size:22px;margin:0">${esc(T.fr.joinTitle)} · ${esc(T.en.joinTitle)}</p>
   ${j.tooLong ? `<p style="color:#c41c24;font-weight:700;margin:0">⚠️ ${esc(t('tooLong'))}</p>` : ''}${qrUsable() ? '' : `<p style="color:#c41c24;font-weight:700;margin:0">⚠️ ${esc(t('offline'))}</p>`}
   <div style="display:flex;gap:10px;width:min(88vw,420px)"><button class="btn ghost small" data-here style="flex:1;color:#1a1008;border-color:#ccc">▶ ${esc(t('playHereS'))}</button><button class="btn ghost small" data-pr style="flex:1;color:#1a1008;border-color:#ccc">🖨 ${esc(t('printS'))}</button></div>`;
  f.querySelector('.x').onclick = () => f.remove();
  f.querySelector('[data-here]').onclick = () => { f.remove(); go('j=' + encodeURIComponent(g.id)); };
  f.querySelector('[data-pr]').onclick = () => { $('#print').innerHTML = `<img src="${LOGO}"><h1>${esc(g.title.fr)}</h1><p>${esc(fmtDate(g.date))}</p><div class="q">${qrSVG(j.url, j.embedded ? 'L' : 'M')}</div><p><b>${esc(T.fr.joinTitle)} · ${esc(T.en.joinTitle)}</b></p><p>${esc(T.fr.printLine)}</p><p>LA BULL · 121 Rue des 2 Cèdres, 24500 Serres-et-Montguyard · 07 68 11 79 87</p><small>SIRET : 990 143 810 00010</small>`; window.print(); };
  document.body.appendChild(f);
}
function receiveHelp(g) {
  if ('BarcodeDetector' in window) return scanner(g);
  modal(`<p style="font-size:44px;margin:0;text-align:center">📷</p><h3 class="center">${esc(t('recvT'))}</h3><p>${esc(t('recvHow'))}</p>
   ${kindOf(g) === 'quiz' ? `<button class="btn small" data-m style="width:100%;margin-top:10px">⌨️ ${esc(t('manual'))}</button>` : ''}<button class="btn ghost small" data-c style="width:100%;margin-top:10px">${esc(t('close'))}</button>`,
   m => { m.querySelector('[data-c]').onclick = () => m.remove(); const mm = m.querySelector('[data-m]'); if (mm) mm.onclick = () => { m.remove(); manualEntry(g); }; });
}
function storeResult(g, r) {
  const all = getRes(g.id);
  if (kindOf(g) === 'poll') { if (r.c && r.c.v) upsertPlayer({ name: r.c.n || r.t, m: r.c.m, v: r.c.v, mk: r.c.mk, at: r.c.at, pin: r.c.p }); const k = r.p || ('x' + Date.now()); const had = !!all[k]; all[k] = { t: r.t || '', a: r.a, ts: had ? all[k].ts : Date.now() }; LS.set(resKey(g.id), all); return { had, count: Object.keys(all).length }; }
  const k = (r.t.trim() + (r.c ? '|' + r.c.v : '')).toLowerCase(); const had = !!all[k];
  all[k] = { k, t: r.t.trim(), a: r.a, c: r.c, ts: had ? all[k].ts : Date.now() }; LS.set(resKey(g.id), all);
  if (r.c && r.c.v) upsertPlayer({ name: r.c.n || r.t.trim(), m: r.c.m, v: r.c.v, mk: r.c.mk, at: r.c.at, pin: r.c.p });
  if (isProno(g)) { const sq = scoreQs(g); return { had, count: Object.keys(all).length, sc: sq.length > 1 ? `${sq.filter(([, i]) => answered(r.a[i])).length}/${sq.length} ${t('matches')}` : sq.length && answered(r.a[sq[0][1]]) ? r.a[sq[0][1]].join(' – ') : '–' }; }
  const pos = ranked(g).findIndex(x => x.t.trim().toLowerCase() === k) + 1;
  return { had, s: scoreOf(g, r.a), pos };
}
function receive(p) {
  if (!isHost()) return pinScreen(() => receive(p));
  let r; try { r = parseResult(p); } catch (e) { return notFound(); }
  const g = findGame(r.g); setAcc(g && g.color);
  if (!g) { app.innerHTML = topBar(t('hostSpace')) + navBar() + `<div class="card center"><h2>⚠️</h2><p>${esc(t('unknownGame'))}</p><p class="muted">${esc(r.t)} · ${esc(r.g)}</p></div>`; return; }
  const res = storeResult(g, r), poll = kindOf(g) === 'poll';
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<div class="card center" style="border:2px solid var(--ok)"><p style="font-size:54px;margin:0">✅</p><h2 style="margin:4px 0;color:var(--ok)">${esc(res.had ? t('already') : poll ? t('pollSaved') : isProno(g) ? t('pronoSaved') : t('saved'))}</h2>
   <p style="font-size:24px;font-weight:700;margin:10px 0 0">${esc(r.t || t('anonymous'))}</p>
   ${isProno(g) ? `<p class="muted" style="margin:6px 0 0">${esc(gTitle(g))}</p><p class="score" style="font-size:${scoreQs(g).length > 1 ? 30 : 48}px;margin:0">${esc(res.sc)}</p><p class="muted">${esc(t('pronos')(res.count))}</p>` : poll ? `<p class="score" style="font-size:40px;margin:0">${esc(t('participants')(res.count))}</p>` : `<p class="score" style="font-size:48px;margin:0">${res.s} / ${g.questions.length}</p><p class="muted">${esc(t('rankNow')(res.pos))}</p>`}
   ${r.n !== g.questions.length ? `<p style="color:var(--bad)">${esc(t('mismatch'))}</p>` : ''}<p class="muted" style="font-size:14px">${esc(L(g.title))}</p></div>
   ${poll ? '' : `<button class="btn" id="dt">📋 ${esc(t('seeAns'))}</button>`}<button class="btn acc" id="rk" style="margin-top:10px">${poll ? '📊 ' + esc(t('seeStats')) : '🏆 ' + esc(isProno(g) ? t('pronosF') : t('ranking'))}</button><button class="btn ghost" id="gm" style="margin-top:10px">🏠 ${esc(t('home'))}</button>`;
  if ($('#dt')) $('#dt').onclick = () => go('admin=team:' + g.id + ':' + encodeURIComponent((r.t.trim() + (r.c ? '|' + r.c.v : '')).toLowerCase()));
  $('#rk').onclick = () => go('admin=rank:' + g.id); $('#gm').onclick = () => go('');
  history.replaceState(null, '', '#admin');
}
async function scanner(g) {
  let stream; try { stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }); } catch (e) { return toast(t('camErr'), false); }
  const det = new BarcodeDetector({ formats: ['qr_code'] }); let live = true, last = '';
  const m = modal(`<p class="muted center">${esc(t('scanning'))}</p><video playsinline muted style="width:100%;border-radius:14px;background:#000"></video><button class="btn small" data-c style="margin-top:10px;width:100%">${esc(t('close'))}</button>`);
  const v = m.querySelector('video'); v.srcObject = stream; await v.play().catch(() => {});
  m.querySelector('[data-c]').onclick = () => { live = false; stream.getTracks().forEach(x => x.stop()); m.remove(); route(); };
  const loop = async () => { if (!live) return; try { for (const c of await det.detect(v)) { const raw = c.rawValue || ''; const i = raw.indexOf('#r='); if (i >= 0 && raw !== last) { last = raw; const r = parseResult(raw.slice(i + 3)); const gg = findGame(r.g); if (!gg) { toast(t('unknownGame'), false); continue; } const res = storeResult(gg, r); toast(kindOf(gg) === 'poll' ? `✅ ${t('participants')(res.count)}` : isProno(gg) ? `✅ ${r.t} · ${res.sc}` : `${res.had ? '↻' : '✅'} ${r.t} · ${res.s}/${gg.questions.length}`); } } } catch (e) {} setTimeout(loop, 250); };
  loop();
}
function manualEntry(g) {
  modal(`<h3>${esc(t('manual'))}</h3><p class="muted" style="font-size:14px">${esc(t('manualT'))}</p><input class="in" id="mt" placeholder="${esc(t('teamPh'))}"><input class="in" id="ma" style="margin-top:8px;text-transform:uppercase;letter-spacing:2px" placeholder="ACBB…" maxlength="${g.questions.length}"><div class="row" style="margin-top:12px"><button class="btn ghost small" data-c>${esc(t('no'))}</button><button class="btn small" data-a>${esc(t('add'))}</button></div>`, m => {
    m.querySelector('[data-c]').onclick = () => m.remove();
    m.querySelector('[data-a]').onclick = () => { const tm = m.querySelector('#mt').value.trim(); const a = m.querySelector('#ma').value.toUpperCase().replace(/[^ABCD\-]/g, '').padEnd(g.questions.length, '-'); if (!tm) return; const res = storeResult(g, { t: tm, a }); m.remove(); toast(`✅ ${tm} · ${res.s}/${g.questions.length}`); route(); };
  });
}
function resetBox() {
  return `<div class="card stack" style="margin-top:22px;border-color:var(--bad)"><p style="margin:0;font-weight:700;color:var(--bad)">🗑 ${esc(t('zeroT'))}</p>
   <button class="btn danger small" id="z1" style="width:100%">${esc(t('zeroGame'))}</button><button class="btn danger small" id="z2" style="width:100%">${esc(t('zeroAll'))}</button></div>`;
}
function bindReset(g, again) {
  $('#z1').onclick = () => pinConfirm(t('zeroGame') + ' — ' + L(g.title), () => { LS.del(resKey(g.id)); toast('✔ ' + t('zeroDone')); again(); });
  $('#z2').onclick = () => pinConfirm(t('zeroAll'), () => { try { Object.keys(localStorage).filter(k => k.startsWith('lb_res_')).forEach(k => localStorage.removeItem(k)); } catch (e) {} toast('✔ ' + t('zeroDone')); again(); });
}
function hostRank(g) {
  setAcc(g.color); const rk = ranked(g), N = g.questions.length; let pos = 0, prev = null;
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 style="font-size:32px">🏆 ${esc(t('ranking'))}</h1><p class="muted">${esc(L(g.title))} · ${esc(t('received')(rk.length))}</p>
   <div class="row" style="margin:8px 0 0"><button class="btn ghost small" id="rcv">📥 ${esc(t('recvS'))}</button><button class="btn ghost small" id="qr2">📲 QR</button></div>
   ${rk.length ? `<button class="btn acc" id="dr" style="margin:12px 0">🎁 ${esc(t('draw'))}</button><div class="card list" style="padding:4px 8px">` + rk.map((r, i) => { if (r.s !== prev) { pos = i + 1; prev = r.s; } const medal = ['🥇', '🥈', '🥉'][pos - 1] || pos; return `<div class="it" data-i="${i}"><span class="rank">${medal}</span><span class="nm">${esc(r.t)}<small>${fmtTime(r.ts)} · ${esc(t('details'))} ›</small></span><span class="score">${r.s}<small style="font-size:16px;color:var(--muted)">/${N}</small></span></div>`; }).join('') + `</div>` : `<div class="card center"><p class="muted">${esc(t('noRes'))}</p></div>`}` + resetBox();
  app.querySelectorAll('.it').forEach(el => el.onclick = () => go('admin=team:' + g.id + ':' + encodeURIComponent(rk[+el.dataset.i].t.trim().toLowerCase())));
  if ($('#dr')) $('#dr').onclick = () => drawModal([{ label: t('drawTop'), names: rk.filter(r => r.s === rk[0].s).map(r => r.t) }, { label: t('drawAll'), names: rk.map(r => r.t) }]);
  $('#rcv').onclick = () => receiveHelp(g); $('#qr2').onclick = () => showQR(g);
  bindReset(g, () => hostRank(g));
}
function bar(label, n, total) { const pc = total ? Math.round(n / total * 100) : 0; return `<div class="bar"><i style="width:${pc}%"></i><span><b>${esc(label)}</b><em style="font-style:normal">${n} · ${pc}%</em></span></div>`; }
function hostStats(g) {
  setAcc(g.color);
  const rs = Object.values(getRes(g.id)).sort((a, b) => a.ts - b.ts), N = rs.length;
  const blocks = g.questions.map((q, i) => {
    const ty = qType(g, q), vals = rs.map(r => r.a[i]).filter(answered);
    let body = '';
    if (ty === 'single') body = q.o.map((o, j) => bar(L(o), vals.filter(v => v === j).length, vals.length)).join('');
    if (ty === 'multi') body = q.o.map((o, j) => bar(L(o), vals.filter(v => v.includes(j)).length, vals.length)).join('');
    if (ty === 'stars') { const avg = vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length) : 0; body = `<p style="font-size:30px;margin:4px 0;font-weight:700;color:var(--gold)">${avg.toFixed(1)} / 5 <span style="font-size:22px">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5 - Math.round(avg))}</span></p>` + [5, 4, 3, 2, 1].map(k => bar('★'.repeat(k), vals.filter(v => v === k).length, vals.length)).join(''); }
    if (ty === 'text') body = rs.filter(r => answered(r.a[i])).map(r => `<div class="txtans">${esc(r.a[i])}${g.anon || !r.t ? '' : `<small>— ${esc(r.t)}</small>`}</div>`).join('') || `<p class="muted">–</p>`;
    return `<div class="card qe"><p class="muted" style="margin:0;font-size:13px">${i + 1}. ${esc(t(ty === 'single' ? 'tSingle' : ty === 'multi' ? 'tMulti' : ty === 'stars' ? 'tStars' : 'tText'))} · ${esc(t('answers')(vals.length))}</p><p style="font-weight:700;margin:4px 0 8px">${esc(L(q.q))}</p>${body}</div>`;
  }).join('');
  const named = !g.anon && rs.some(r => r.t);
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 style="font-size:32px">📊 ${esc(t('stats'))}</h1><p class="muted">${esc(L(g.title))} · <b style="color:var(--gold)">${esc(t('participants')(N))}</b></p>
   <div class="row" style="margin:8px 0 0"><button class="btn ghost small" id="rcv">📥 ${esc(t('recvS'))}</button><button class="btn ghost small" id="qr2">📲 QR</button></div>
   ${N ? (named ? `<button class="btn acc" id="dr" style="margin:12px 0">🎁 ${esc(t('draw'))}</button>` : '') + blocks : `<div class="card center"><p class="muted">${esc(t('noRes'))}</p></div>`}
   ${named && N ? `<h2>${esc(t('byPerson'))}</h2><div class="card list" style="padding:4px 8px">` + rs.map(r => `<div class="it" style="display:block"><b>${esc(r.t || t('anonymous'))}</b> <small class="muted">${fmtTime(r.ts)}</small><div style="font-size:13px;color:var(--muted);margin-top:4px">${g.questions.map((q, i) => `${i + 1}. ${esc(ansLabel(g, q, r.a[i]))}`).join(' · ')}</div></div>`).join('') + `</div>` : ''}` + resetBox();
  if ($('#dr')) $('#dr').onclick = () => drawModal([{ label: t('drawAll'), names: rs.filter(r => r.t).map(r => r.t) }]);
  $('#rcv').onclick = () => receiveHelp(g); $('#qr2').onclick = () => showQR(g);
  bindReset(g, () => hostStats(g));
}
function drawModal(pools) {
  let pi = 0;
  const m = modal(`<h3 class="center">🎁 ${esc(t('draw'))}</h3>${pools.length > 1 ? `<div class="tabs">${pools.map((p, i) => `<button data-p="${i}" class="${i ? '' : 'on'}">${esc(p.label)}</button>`).join('')}</div>` : ''}
   <p class="muted center" id="cnt" style="font-size:14px"></p><div class="draw" id="dw">?</div><button class="btn acc" id="go">${esc(t('drawGo'))}</button><button class="btn ghost small" data-c style="margin-top:10px;width:100%">${esc(t('close'))}</button>`);
  const upd = () => { m.querySelector('#cnt').textContent = pools[pi].names.join(' · '); };
  m.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { pi = +b.dataset.p; m.querySelectorAll('[data-p]').forEach(x => x.classList.toggle('on', x === b)); upd(); });
  upd(); m.querySelector('[data-c]').onclick = () => m.remove();
  m.querySelector('#go').onclick = () => {
    const c = pools[pi].names; if (!c.length) return;
    const win = c[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * c.length)];
    const dw = m.querySelector('#dw'), btn = m.querySelector('#go'); btn.disabled = true; dw.classList.remove('winner');
    let k = 0, delay = 45; const steps = 22;
    const tick = () => { k++; if (k < steps) { dw.textContent = c[k % c.length]; delay *= 1.1; setTimeout(tick, delay); } else { dw.textContent = '🏆 ' + win; dw.classList.add('winner'); btn.disabled = false; btn.textContent = t('again'); confetti(); } };
    tick();
  };
}
function hostTeam(g, key) {
  setAcc(g.color);
  const r = getRes(g.id)[key]; if (!r) return go('admin=rank:' + g.id);
  const N = g.questions.length, a = r.a.padEnd(N, '-'), sc = scoreOf(g, r.a), pos = ranked(g).findIndex(x => x.t.trim().toLowerCase() === key) + 1;
  let only = false;
  const draw = () => {
    const items = g.questions.map((q, i) => {
      const c = a[i], gi = LETTERS.indexOf(c), ok = gi === q.a; if (only && ok) return '';
      return `<div class="card" style="border-left:6px solid ${ok ? 'var(--ok)' : 'var(--bad)'};padding:12px 14px"><p style="margin:0;font-size:13px;color:var(--muted)">${esc(t('q'))} ${i + 1} ${ok ? '✅' : '❌'}</p>
        <p style="margin:4px 0 8px;font-weight:700">${esc(L(q.q))}</p><p style="margin:0;color:${ok ? 'var(--ok)' : 'var(--bad)'};font-weight:700">${esc(t('given'))} : ${gi < 0 ? esc(t('noAns')) : `${c} — ${esc(L(q.o[gi]))}`}</p>
        ${ok ? '' : `<p style="margin:4px 0 0;color:var(--ok)">${esc(t('good'))} : ${LETTERS[q.a]} — ${esc(L(q.o[q.a]))}</p>`}${!ok && q.info && L(q.info) ? `<p style="margin:6px 0 0;font-size:13px">💡 ${esc(L(q.info))}</p>` : ''}</div>`;
    }).join('');
    app.innerHTML = topBar(t('hostSpace')) + navBar() + `<div class="card center"><p style="font-size:24px;font-weight:700;margin:0">${esc(r.t)}</p><p class="score" style="font-size:52px;margin:0">${sc} / ${N}</p>
      <p class="muted" style="margin:0">${esc(t('rankNow')(pos))} · ${esc(t('errors')(N - sc))}</p><p class="muted" style="margin:4px 0 0;font-size:13px">${esc(L(g.title))} · ${esc(t('receivedAt'))} ${fmtTime(r.ts)}</p></div>
      <div class="tabs"><button data-f="0" class="${only ? '' : 'on'}">${esc(t('allQ'))}</button><button data-f="1" class="${only ? 'on' : ''}">❌ ${esc(t('errOnly'))} (${N - sc})</button></div>` + items;
    app.querySelectorAll('[data-f]').forEach(b => b.onclick = () => { only = b.dataset.f === '1'; draw(); });
  };
  draw();
}
function hostKey(g) {
  setAcc(g.color); const quiz = kindOf(g) === 'quiz';
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h1 style="font-size:30px">📋 ${esc(quiz ? t('keyS') : t('qsS'))}</h1><p class="muted">${esc(L(g.title))}</p>` +
    g.questions.map((q, i) => { const ty = qType(g, q); return `<div class="card qe"><p class="muted" style="margin:0;font-size:13px">${i + 1}. ${quiz ? '' : esc(typeLabel(ty))}</p><p style="font-weight:700;margin:4px 0">${esc(L(q.q))}</p>
     ${quiz ? `<p style="font-size:18px;font-weight:700;margin:6px 0"><span class="pill" style="background:var(--ok);color:#06210f;border:0">${LETTERS[q.a]}</span> ${esc(L(q.o[q.a]))}</p>${q.info && L(q.info) ? `<p style="font-size:14px;margin:0">💡 ${esc(L(q.info))}</p>` : ''}`
      : (q.o && q.o.length && (ty === 'single' || ty === 'multi') ? `<p class="muted" style="font-size:14px;margin:0">${q.o.map((o, j) => `${LETTERS[j]}. ${esc(L(o))}`).join(' · ')}</p>` : '')}</div>`; }).join('');
}

/* ================= EDITOR ================= */
const COLORS = ['#1f9d55', '#c41c24', '#e07a10', '#8a3fb0', '#1c5fd1', '#d61f7a', '#b08a18', '#0e8f8f'];
const blankQ = (kind, type = 'single') => kind !== 'quiz' ? { type, q: { fr: '', en: '' }, o: type === 'single' || type === 'multi' ? [{ fr: '', en: '' }, { fr: '', en: '' }] : [] } : { q: { fr: '', en: '' }, o: [{ fr: '', en: '' }, { fr: '', en: '' }, { fr: '', en: '' }], a: 0, info: { fr: '', en: '' } };
function hostEdit(src, newKind) {
  if (src && isBuiltin(src.id)) { toast(t('builtinRO'), false); return go(''); }
  const kind = src ? kindOf(src) : (['poll', 'prono'].includes(newKind) ? newKind : 'quiz');
  const poll = kind === 'poll', prono = kind === 'prono', typed = kind !== 'quiz';
  const g = src ? JSON.parse(JSON.stringify(src)) : { id: (poll ? 's-' : prono ? 'p-' : 'g-') + Date.now().toString(36), kind, title: { fr: '', en: '' }, sub: { fr: '', en: '' }, date: new Date().toISOString().slice(0, 10), time: prono ? '21:00' : '', mode: prono ? 'solo' : 'team', anon: !prono, sport: 'rugby', teams: { a: { fr: '', en: '' }, b: { fr: '', en: '' } }, color: COLORS[poll ? 4 : prono ? 0 : 0], questions: prono ? [{ type: 'score', q: { fr: '', en: '' }, o: [] }] : [blankQ(kind)] };
  const TYPES = poll ? ['single', 'multi', 'stars', 'text'] : ['single', 'number'];
  setAcc(g.color);
  const draw = () => {
    const field = (k, lab, v, extra = '') => `<label class="f">${esc(lab)}</label><input class="in" data-k="${k}" value="${esc(v || '')}" ${extra}>`;
    app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h2>${esc(prono ? t('kProno') : poll ? t('kPoll') : t('kQuiz'))} · ${esc(src ? t('edit') : t('create'))}</h2>
    <div class="card">${prono ? `<label class="f">${esc(t('sport'))}</label><div class="tabs" style="justify-content:flex-start">${['rugby', 'foot', 'other'].map(s => `<button data-sp="${s}" class="${g.sport === s ? 'on' : ''}">${SPORT_ICON[s]} ${esc(t(s))}</button>`).join('')}</div>
      ${field('teams.a.fr', t('teamAL'), g.teams.a.fr, 'placeholder="France"')}${field('teams.b.fr', t('teamBL'), g.teams.b.fr, 'placeholder="Irlande"')}` : ''}
    ${field('title.fr', t('title') + ' FR' + (prono ? ' (' + t('optional') + ')' : ''), g.title.fr)}${field('title.en', t('title') + ' EN' + (prono ? ' (' + t('optional') + ')' : ''), g.title.en)}
    ${field('sub.fr', t('subtitle') + ' FR', g.sub.fr)}${field('sub.en', t('subtitle') + ' EN', g.sub.en)}
    <div class="row"><div><label class="f">${esc(t('date'))}</label><input class="in" type="date" data-k="date" value="${esc(g.date)}"></div>
    ${prono ? `<div><label class="f">${esc(t('time'))}</label><input class="in" type="time" data-k="time" value="${esc(g.time || '')}"></div>` : `<div><label class="f">${esc(poll ? t('anonL') : t('mode'))}</label>${poll ? `<select class="in" id="an"><option value="1" ${g.anon ? 'selected' : ''}>${esc(t('anonY'))}</option><option value="0" ${g.anon ? '' : 'selected'}>${esc(t('anonN'))}</option></select>` : `<select class="in" data-k="mode"><option value="team" ${g.mode === 'team' ? 'selected' : ''}>${esc(t('modeTeam'))}</option><option value="solo" ${g.mode === 'solo' ? 'selected' : ''}>${esc(t('modeSolo'))}</option></select>`}</div>`}</div>
    ${prono ? `<label class="f">${esc(t('mode'))}</label><select class="in" data-k="mode"><option value="solo" ${g.mode !== 'team' ? 'selected' : ''}>${esc(t('modeSolo'))}</option><option value="team" ${g.mode === 'team' ? 'selected' : ''}>${esc(t('modeTeam'))}</option></select>` : ''}
    ${typed ? field('end.fr', t('endL') + ' FR', g.end?.fr) + field('end.en', t('endL') + ' EN', g.end?.en) : ''}
    <label class="f">${esc(t('color'))}</label><div class="colors">${COLORS.map(c => `<button data-col="${c}" class="${g.color === c ? 'on' : ''}" style="background:${c}"></button>`).join('')}</div></div>
    <h2>${esc(prono ? t('bonusTitle') : t('questions'))} (${g.questions.length - (prono ? 1 : 0)})</h2>${typed ? '' : `<p class="muted" style="font-size:14px">${esc(t('correct'))}</p>`}
    ${prono ? `<button class="btn" id="fun">${esc(t('addFun'))}</button>` : ''}` +
    g.questions.map((q, i) => { const ty = typed ? (q.type || 'single') : 'single', withO = ty === 'single' || ty === 'multi', maxO = typed ? 8 : 4;
      if (ty === 'score') return `<div class="card qe"><p style="margin:0;font-weight:700">${SPORT_ICON[g.sport] || '🏆'} ${esc(t('tScore'))} : ${esc(L(g.teams.a) || 'A')} – ${esc(L(g.teams.b) || 'B')}</p><p class="muted" style="margin:4px 0 0;font-size:13px">${esc(t('ptsRule'))}</p></div>`;
      return `<div class="card qe"><div class="row" style="justify-content:space-between"><b class="qnum" style="flex:none">${prono ? i : i + 1}</b><span style="flex:none;display:flex;gap:6px"><button class="btn ghost small" data-up="${i}" ${i === (prono ? 1 : 0) ? 'disabled' : ''}>↑</button><button class="btn ghost small" data-dn="${i}" ${i === g.questions.length - 1 ? 'disabled' : ''}>↓</button><button class="btn danger small" data-rm="${i}">✕</button></span></div>
      ${typed ? `<label class="f">${esc(t('qType'))}</label><select class="in" data-ty="${i}">${TYPES.map(x => `<option value="${x}" ${ty === x ? 'selected' : ''}>${esc(typeLabel(x))}</option>`).join('')}${prono ? `<option value="yesno">${esc(t('tYesNo'))}</option>` : ''}</select>` : ''}
      <label class="f">${esc(t('qFr'))}</label><textarea class="in" data-k="q.${i}.q.fr">${esc(q.q.fr)}</textarea><label class="f">${esc(t('qEn'))}</label><textarea class="in" data-k="q.${i}.q.en">${esc(q.q.en)}</textarea>
      ${withO ? q.o.map((o, j) => `<div class="optrow">${typed ? `<span class="rad" style="display:grid;place-items:center">${LETTERS[j]}</span>` : `<button class="rad ${q.a === j ? 'on' : ''}" data-ok="${i}.${j}">${LETTERS[j]}</button>`}<div class="two"><input class="in" placeholder="${esc(t('optFr'))}" data-k="q.${i}.o.${j}.fr" value="${esc(o.fr)}"><input class="in" placeholder="${esc(t('optEn'))}" data-k="q.${i}.o.${j}.en" value="${esc(o.en)}"></div>${q.o.length > 2 ? `<button class="btn ghost small" data-ro="${i}.${j}" style="flex:none">✕</button>` : ''}</div>`).join('') + (q.o.length < maxO ? `<button class="btn ghost small" data-ao="${i}" style="margin-top:8px">${esc(t('addOpt'))}</button>` : '') : ''}
      ${typed ? '' : `<label class="f">${esc(t('info'))}</label><input class="in" placeholder="FR" data-k="q.${i}.info.fr" value="${esc(q.info?.fr || '')}"><input class="in" style="margin-top:6px" placeholder="EN" data-k="q.${i}.info.en" value="${esc(q.info?.en || '')}">`}</div>`; }).join('') +
    `<button class="btn ghost" id="aq" style="margin-top:12px">${esc(t('addQ'))}</button><div class="row" style="margin-top:12px"><button class="btn ghost" id="cx">✕ ${esc(t('cancelS'))}</button><button class="btn" id="sv">💾 ${esc(t('save'))}</button></div>${src ? `<button class="btn danger" id="dl" style="margin-top:12px">${esc(t('del'))}</button>` : ''}`;
    $('#cx').onclick = () => confirmBox(t('cancelEd'), t('cancelEdT'), t('cancelYes'), () => go(''), true);
    app.querySelectorAll('[data-k]').forEach(el => el.oninput = el.onchange = () => {
      const p = el.dataset.k.split('.'); let o = p[0] === 'q' ? g.questions : g; const path = p[0] === 'q' ? p.slice(1) : p;
      for (let k = 0; k < path.length - 1; k++) { o[path[k]] = o[path[k]] ?? {}; o = o[path[k]]; } o[path[path.length - 1]] = el.value;
      if (p[0] === 'teams') { g.teams[p[1]].en = el.value; }
    });
    app.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => { g.sport = b.dataset.sp; draw(); });
    const an = $('#an'); if (an) an.onchange = () => { g.anon = an.value === '1'; };
    app.querySelectorAll('[data-ty]').forEach(s => s.onchange = () => { const q = g.questions[+s.dataset.ty];
      if (s.value === 'yesno') { q.type = 'single'; q.o = [{ fr: 'Oui', en: 'Yes' }, { fr: 'Non', en: 'No' }]; }
      else { q.type = s.value; if ((s.value === 'single' || s.value === 'multi') && (!q.o || q.o.length < 2)) q.o = [{ fr: '', en: '' }, { fr: '', en: '' }]; if (s.value === 'number' || s.value === 'stars' || s.value === 'text') q.o = []; }
      draw(); });
    if ($('#fun')) $('#fun').onclick = () => { const have = new Set(g.questions.map(q => q.q.fr)); presets(g.sport, L(g.teams.a) || 'Équipe 1', L(g.teams.b) || 'Équipe 2').forEach(q => { if (!have.has(q.q.fr)) g.questions.push(q); }); toast('✔ ' + t('funAdded')); draw(); };
    app.querySelectorAll('[data-col]').forEach(b => b.onclick = () => { g.color = b.dataset.col; setAcc(g.color); draw(); });
    app.querySelectorAll('[data-ok]').forEach(b => b.onclick = () => { const [i, j] = b.dataset.ok.split('.').map(Number); g.questions[i].a = j; draw(); });
    app.querySelectorAll('[data-ao]').forEach(b => b.onclick = () => { g.questions[+b.dataset.ao].o.push({ fr: '', en: '' }); draw(); });
    app.querySelectorAll('[data-ro]').forEach(b => b.onclick = () => { const [i, j] = b.dataset.ro.split('.').map(Number); const q = g.questions[i]; q.o.splice(j, 1); if (q.a >= q.o.length) q.a = 0; draw(); });
    app.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { g.questions.splice(+b.dataset.rm, 1); if (!g.questions.length) g.questions.push(blankQ(kind)); draw(); });
    app.querySelectorAll('[data-up]').forEach(b => b.onclick = () => { const i = +b.dataset.up; [g.questions[i - 1], g.questions[i]] = [g.questions[i], g.questions[i - 1]]; draw(); });
    app.querySelectorAll('[data-dn]').forEach(b => b.onclick = () => { const i = +b.dataset.dn; [g.questions[i + 1], g.questions[i]] = [g.questions[i], g.questions[i + 1]]; draw(); });
    $('#aq').onclick = () => { const last = g.questions[g.questions.length - 1]; g.questions.push(blankQ(kind, last && last.type && last.type !== 'score' ? last.type : 'single')); draw(); setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 50); };
    $('#sv').onclick = () => {
      if (prono) { g.teams.a.fr ||= 'Équipe 1'; g.teams.b.fr ||= 'Équipe 2'; g.teams.a.en = g.teams.a.en || g.teams.a.fr; g.teams.b.en = g.teams.b.en || g.teams.b.fr; g.questions[0] = scoreQ(g); }
      g.questions = g.questions.filter(q => { const ty = typed ? (q.type || 'single') : 'single'; if (ty === 'score') return true; return (q.q.fr || q.q.en) && (!(ty === 'single' || ty === 'multi') || q.o.filter(o => o.fr || o.en).length >= 2); });
      g.questions.forEach(q => { q.q.fr ||= q.q.en; q.q.en ||= q.q.fr; const ty = typed ? (q.type || 'single') : 'single'; if (ty === 'single' || ty === 'multi') { q.o = q.o.filter(o => o.fr || o.en); q.o.forEach(o => { o.fr ||= o.en; o.en ||= o.fr; }); } else q.o = []; });
      if (!g.questions.length) { g.questions.push(blankQ(kind)); draw(); return toast(t('minQ'), false); }
      if (prono) { g.title.fr ||= `${g.teams.a.fr} – ${g.teams.b.fr}`; }
      g.title.fr ||= g.title.en || (poll ? 'Sondage' : 'Quiz'); g.title.en ||= g.title.fr;
      if (g.end && !g.end.fr && !g.end.en) delete g.end;
      const list = myGames().filter(x => x.id !== g.id); list.push(g); saveMyGames(list); toast('✔ ' + t('save')); go('');
    };
    if ($('#dl')) $('#dl').onclick = () => confirmBox(t('delQ'), L(g.title), t('del'), () => { saveMyGames(myGames().filter(x => x.id !== g.id)); go(''); }, true);
  };
  draw();
}

/* ================= SETTINGS ================= */
function download(name, text, type) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); }
function hostSettings() {
  setAcc();
  app.innerHTML = topBar(t('hostSpace')) + navBar() + `<h2>⚙️ ${esc(t('settings'))}</h2>
   <div class="card"><label class="f">${esc(t('newPin'))}</label><div class="row"><input class="in" id="np" inputmode="numeric" maxlength="8"><button class="btn small" id="sp" style="flex:none">${esc(t('save'))}</button></div></div>
   <div class="card"><label class="f">${esc(t('baseL'))}</label><p class="muted" style="font-size:13px;margin:0 0 8px">${esc(ONLINE ? t('baseOn') + ' ' + location.origin + location.pathname : t('baseT'))}</p>${ONLINE ? '' : `<div class="row"><input class="in" id="bu2" placeholder="https://…" value="${esc(LS.get('lb_base', ''))}"><button class="btn small" id="sb" style="flex:none">${esc(t('save'))}</button></div>`}</div>
   <div class="card stack"><p class="muted" style="font-size:14px;margin:0">${esc(t('exportT'))}</p><button class="btn" id="ex">⬇️ ${esc(t('export'))}</button>
   <button class="btn ghost small" id="bu" style="width:100%">${esc(t('backup'))}</button><label class="btn ghost small" style="width:100%">${esc(t('import'))}<input type="file" id="im" accept=".json,application/json" hidden></label></div>`;
  $('#sp').onclick = () => { const v = $('#np').value.trim(); if (v.length >= 4) { LS.set('lb_pin', v); toast(t('pinSaved')); $('#np').value = ''; } };
  if ($('#sb')) $('#sb').onclick = () => { LS.set('lb_base', $('#bu2').value.trim()); toast(t('pinSaved')); };
  $('#ex').onclick = () => { const json = JSON.stringify(allGames()).replace(/</g, '\\u003c'); download('index.html', SRC.replace(/(<script id="games-data" type="application\/json">)[\s\S]*?(<\/script>)/, (_, a, b) => a + json + b), 'text/html'); };
  $('#bu').onclick = () => download('labull-creations.json', JSON.stringify(myGames(), null, 1), 'application/json');
  $('#im').onchange = async e => { try { const arr = JSON.parse(await e.target.files[0].text()); const m = myGames(); for (const g of arr) { if (g && g.id && g.questions) { const i = m.findIndex(x => x.id === g.id); i >= 0 ? m[i] = g : m.push(g); } } saveMyGames(m); toast('✔ ' + arr.length); } catch (er) { toast('JSON ?', false); } };
}

route();
