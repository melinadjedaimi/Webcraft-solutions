# WebCraft Solutions - Portail React

Dans ce projet, j'ai migré le portail WebCraft Solutions (réalisé lors de l'évaluation E1 en HTML, CSS et JavaScript natif) vers **React**. Le site présente les projets clients et le catalogue de formations d'une agence web fictive, et propose un formulaire d'inscription à une formation.

J'ai gardé le design de l'E1 (palette beige et marron, cartes, modals) et les mêmes fonctionnalités, mais le code est maintenant découpé en composants réutilisables et en hooks.

## Technologies

- **React 19** avec **Vite** (JavaScript, sans TypeScript)
- **React Router 6** pour la navigation entre les pages
- **Bootstrap 5** pour la grille et les composants de base, et **Bootstrap Icons** pour les icônes
- CSS3 dans `App.css` (variables, animations `@keyframes`, media queries)
- Deux API REST utilisées avec `fetch`

Je n'ai utilisé aucune bibliothèque de composants (Material-UI, Ant Design...) ni de gestion d'état globale : seulement `useState`, `useEffect`, `useMemo` et `useCallback`.

## Installation et lancement

Il faut avoir Node.js installé, et une connexion Internet pour récupérer les données des API.

```bash
npm install      # installe les dépendances
npm run dev      # lance le site en local (http://localhost:5173)
npm run build    # génère la version de production dans dist/
npm run lint     # vérifie le code avec oxlint
```

## Les API

| API | URL | Utilisée pour |
|-----|-----|---------------|
| Projets | `https://webcraft-api.vercel.app/data/projects.json` | Section Projets (`projects`, `categories`, `technologies`) |
| Formations | `https://webcraft-api.vercel.app/data/courses.json` | Section Formations et liste du formulaire (`courses`, `categories`, `levels`, `technologies`) |

Les deux API sont indépendantes : si l'une est en panne, l'autre section s'affiche quand même. En cas d'erreur, un message clair apparaît avec un bouton **Réessayer**. Les URL sont dans `src/config.js`.

## Fonctionnalités

- Page d'accueil avec un hero animé en CSS, la section Projets et la section Formations
- Recherche en temps réel (sans tenir compte des accents ni des majuscules) et filtres dynamiques
- Fenêtres modales avec le détail d'un projet ou d'une formation
- Pages `/projets` et `/formations` qui réutilisent les mêmes sections que l'accueil
- Formulaire d'inscription avec validation, messages d'erreur sous chaque champ et compteur de caractères
- Bouton « S'inscrire » sur chaque formation : le lien `?formation=` pré-sélectionne la formation dans le formulaire
- Loader pendant le chargement et site responsive

## Arborescence

```
src/
├── main.jsx                  # Point d'entrée (importe Bootstrap et monte App)
├── App.jsx                   # Composant racine : Router, Header, routes, Footer
├── App.css                   # Styles globaux (charte, cartes, formulaire, responsive)
├── config.js                 # Constantes : URL d'API, liens du menu, champs du formulaire...
├── pages/                    # Une page = une route
│   ├── Home.jsx              # Hero + section Projets + section Formations
│   ├── ProjectsPage.jsx      # Page /projets
│   ├── CoursesPage.jsx       # Page /formations
│   └── InscriptionPage.jsx   # Page /inscription
├── components/
│   ├── Header.jsx, Footer.jsx, Hero.jsx, ScrollToTop.jsx
│   ├── Loader.jsx, ErrorMessage.jsx, EmptyState.jsx   # États d'affichage
│   ├── SearchBar.jsx, FilterBar.jsx                    # Recherche et filtres (génériques)
│   ├── Modal.jsx                                       # Modal générique
│   ├── DataSection.jsx       # Section avec en-tête, loader, erreur ou contenu
│   ├── ProjectsSection.jsx, ProjectCard.jsx, ProjectDetails.jsx
│   ├── CoursesSection.jsx, CourseCard.jsx, CourseDetails.jsx
│   ├── SafeImage.jsx, TechBadges.jsx, RatingStars.jsx  # Petits éléments partagés
│   └── InscriptionForm.jsx, FormField.jsx, FormSection.jsx,
│       CourseChoiceSection.jsx, ConsentCheckbox.jsx, InscriptionSuccess.jsx
├── hooks/
│   ├── useFetch.jsx          # Chargement d'une API (data, isLoading, error, retry)
│   ├── useSearch.jsx         # Recherche texte + filtres sur une liste
│   └── useForm.jsx           # Valeurs et erreurs d'un formulaire
└── utils/
    ├── validation.js         # Règles de validation du formulaire (avec JSDoc)
    └── text.js               # Normalisation du texte et accord du compteur de résultats
```

## Composants réutilisables

Le but était de ne rien écrire deux fois entre la section Projets et la section Formations.

- **`SearchBar`** et **`FilterBar`** : ce sont exactement les mêmes composants dans les deux sections. `FilterBar` reçoit simplement la liste des filtres à afficher (2 pour les projets, 3 pour les formations) et fabrique une liste déroulante par filtre.
- **`Modal`** : elle ne connaît ni les projets ni les formations. Le contenu est passé en `children` (`ProjectDetails` ou `CourseDetails`) et les boutons d'action en prop `footer`. Elle se ferme avec la croix, un clic à l'extérieur ou la touche Échap.
- **`DataSection`** : elle affiche l'en-tête d'une section, puis le loader, le message d'erreur ou le contenu selon l'état de l'appel API.
- **`ProjectCard`** et **`CourseCard`** : les deux cartes partagent les mêmes styles (`catalog-card`) et les mêmes petits composants (`SafeImage` pour l'image de secours, `TechBadges`, `RatingStars`).
- **`FormField`** : un seul composant pour tous les champs du formulaire (texte, email, liste déroulante, zone de texte) avec son label et son message d'erreur.

Chaque composant a une seule responsabilité et fait moins de 150 lignes (le plus long est `InscriptionForm`, avec 128 lignes).

## Les hooks personnalisés

- **`useFetch(url)`** : charge une URL et renvoie `data`, `isLoading` et `error`, plus une fonction `retry()` pour le bouton Réessayer. Il teste `response.ok` (car `fetch` ne plante pas sur une erreur 404 ou 500) et annule la requête si le composant disparaît.
- **`useSearch(items, searchFields)`** : gère le texte de recherche et les filtres, et renvoie la liste filtrée (calculée avec `useMemo`). Il fonctionne pour un champ simple (catégorie, niveau) comme pour un tableau (technologies).
- **`useForm(...)`** : gère les valeurs et les erreurs du formulaire d'inscription. Une erreur s'affiche quand on quitte un champ et disparaît dès qu'on la corrige.

## Choix techniques

- **Bootstrap plutôt que Tailwind** : je le connaissais déjà par l'E1 et il suffit pour la grille et les composants. J'ai surtout surchargé ses variables CSS (couleur principale) pour retrouver la palette de l'E1.
- **Pas de gestion d'état globale** : les données ne sont utilisées que dans leur section, donc `useState` dans chaque section suffit. Je n'ai pas eu de prop drilling important.
- **Validation externalisée** : toutes les règles sont dans `utils/validation.js` (champs obligatoires, email, téléphone international, motivation de 50 caractères minimum, case RGPD). Les composants affichent seulement les messages.
- **Fichier `config.js`** : les URL d'API, les niveaux, le nombre minimum de caractères, les liens du menu et la définition des champs du formulaire sont au même endroit, pour les modifier facilement.
- **Les deux sections ne sont pas fusionnées en un seul composant générique** : elles se ressemblent, mais chacune garde son affichage et sa logique propre. J'ai préféré un code plus simple à relire qu'un composant trop abstrait. La logique commune est dans les hooks et les composants partagés.
- **`ScrollToTop`** : React Router ne remonte pas en haut de la page quand on change de page, donc j'ai ajouté ce petit composant.

## Limites et pistes d'amélioration

- Le formulaire d'inscription est une démonstration : après validation, l'envoi est simulé (délai de 1,5 seconde puis message de confirmation). Aucune donnée n'est envoyée ni enregistrée.
- Je n'ai pas écrit de tests automatisés. Je pourrais en ajouter pour les filtres et la validation.
- Les images viennent des API : si l'une ne charge pas, une image de secours s'affiche.
- Je pourrais ajouter une pagination des résultats et vérifier l'accessibilité au clavier et avec un lecteur d'écran.
