# Formation IA Générative - Institut français du Cambodge

Application de présentation interactive pour la formation sur l'intelligence artificielle générative.

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

L'application sera accessible sur http://localhost:5173

## Fonctionnalités

### Navigation
- **Flèches gauche/droite** : Naviguer entre les slides
- **Barre d'espace** : Slide suivante
- **G** : Ouvrir la grille de navigation
- **F** : Mode plein écran
- **P** : Notes du présentateur
- **Swipe** : Navigation tactile sur mobile/tablette

### Interface
- Barre de progression en haut
- Compteur de slides en bas
- Mode clair/sombre
- Navigation par grille
- Design responsive

### Contenu
- Slides de présentation interactives
- Cartes visuelles pour chaque outil IA
- Liens directs vers les outils
- Exercices pratiques guidés
- Ressources complémentaires

## Structure des slides

1. **Page de titre** - Présentation de la formation
2. **Agenda** - Programme détaillé de la journée
3. **Introduction** - Concepts de base de l'IA générative
4. **Outils conversationnels** - ChatGPT, Claude, Gemini, etc.
5. **Génération d'images** - Outils créatifs IA
6. **Exercices pratiques** - Mise en application
7. **Intégration professionnelle** - Cas d'usage
8. **Ressources** - Pour continuer l'apprentissage
9. **Q&A** - Session de questions/réponses

## Technologies utilisées

- React 18
- Vite
- Framer Motion (animations)
- React Icons
- React Swipeable (navigation tactile)

## Personnalisation

Les données des slides sont dans `src/data/slides.js`
Les informations des outils IA sont dans `src/data/aiTools.js`