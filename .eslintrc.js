module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off", // Avec la nouvelle version de React, l'importation de React n'est pas nécessaire dans chaque fichier.
        "react/prop-types": "off", // Désactivez les prop-types car TypeScript s'en charge.
        "@typescript-eslint/explicit-module-boundary-types": "off", // Désactivez cette règle si vous ne voulez pas spécifier de type de retour.
        "no-unused-vars": "warn", // Avertir sur les variables non utilisées.
        "no-console": "warn", // Avertir sur l'utilisation de console.log.
    },
    "settings": {
        "react": {
            "version": "detect" // Détecte automatiquement la version de React à utiliser.
        }
    }
};

