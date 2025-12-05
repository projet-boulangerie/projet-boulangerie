
# Projet Boulangerie

Une application web moderne pour présenter la Guilde de la Boulangerie et son équipe royale.


## À propos

Cette application présente :
- La Guilde de la Boulangerie et son équipe
- Une page de croissantage interactive avec intégration Slack
- Un mini-jeu interactif
- Design responsive et moderne

## Technologies

- **Framework** : Next.js 15.5 avec App Router
- **UI** : React 19.1, Tailwind CSS 4.1, Lucide Icons
- **Langage** : TypeScript 5.9
- **Développement** : ESLint 9, Turbopack
- **Déploiement** : GitHub Pages (export statique)

## Prérequis

- Node.js >= 20.x LTS
- npm >= 10 (installé avec Node.js)

## Démarrage rapide

```bash
# Cloner le dépôt
git clone https://github.com/projet-boulangerie/projet-boulangerie.git
cd projet-boulangerie

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Scripts disponibles

- **`npm run dev`** : Lance le serveur de développement avec Turbopack
- **`npm run build`** : Génère l'export statique pour la production dans le dossier `out/`
- **`npm start`** : Lance le serveur de production Next.js
- **`npm run lint`** : Exécute ESLint pour vérifier la qualité du code
- **`npm run deploy`** : Build et déploie automatiquement sur GitHub Pages


## Architecture du projet

```
projet-boulangerie/
├── app/
|   ├── layout.tsx                  # Layout principal
|   ├── page.tsx                    # Page principale
|   ├── croissant/
|   |   ├── page.tsx                # Page Croissantage avec bouton Slack
|   ├── game/
|       ├── page.tsx                # Mini-jeu interactif
├── components/
|   ├── croissant/                  # Components de croissant/
|   ├── layout/                     # Components de layout.tsx
|   ├── legal/                      # Mentions légales et Politique de confidentialité
|   ├── FourMaudit.tsx              # Component de game/
├── lib/                            # Librairies React
├── public/                         # Assets statiques (images)
└── styles/                         # Styles globaux
```

## Licence

MIT
