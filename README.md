# React Native Firebase Auth App

Une application mobile React Native avec Expo qui implémente un système d'authentification complet utilisant Firebase.

## Fonctionnalités

- Inscription avec email et mot de passe
- Connexion utilisateur
- Déconnexion
- Réinitialisation du mot de passe
- Validation des formulaires
- Animations fluides
- Interface utilisateur moderne avec React Native Paper
- Navigation avec React Navigation

## Configuration requise

- Node.js
- npm ou yarn
- Expo CLI
- Un compte Firebase

## Installation

1. Clonez le dépôt :
```bash
git clone [votre-repo]
cd firebase-auth-app
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez Firebase :
   - Créez un projet sur la [Console Firebase](https://console.firebase.google.com)
   - Activez l'authentification par email/mot de passe
   - Copiez vos informations de configuration Firebase
   - Mettez à jour le fichier `src/config/firebase.ts` avec vos informations de configuration

## Configuration Firebase

Remplacez les valeurs dans `src/config/firebase.ts` avec vos propres informations de configuration Firebase :

```typescript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_AUTH_DOMAIN",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_STORAGE_BUCKET",
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
  appId: "VOTRE_APP_ID"
};
```

## Démarrage

Pour lancer l'application en mode développement :

```bash
npx expo start
```

## Structure du projet

```
src/
  ├── components/       # Composants réutilisables
  ├── config/          # Configuration (Firebase, etc.)
  ├── context/         # Context API (Auth)
  ├── navigation/      # Configuration de la navigation
  ├── screens/         # Écrans de l'application
  ├── types/           # Types TypeScript
  └── utils/           # Utilitaires (validation, etc.)
```

## Technologies utilisées

- React Native
- Expo
- Firebase Authentication
- React Navigation
- React Native Paper
- React Native Reanimated
- TypeScript
- Yup (validation)
- React Hook Form
