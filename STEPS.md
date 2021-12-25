This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation de Nextjs

Utilisation du template typescript

```bash
npx create-next-app@latest --ts
```

## Installation de SASS

```bash
npm install sass
```

documentation : [SASS Support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)

## configuration absolute imports and aliases

documentation : [absolute imports and aliases](https://nextjs.org/blog/next-9-4#absolute-imports-and-aliases)

```bash
// tsconfig.json or tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}

```

## Installation de prettier

```bash
npm i -D prettier
```

### Installation de eslint-config-prettier

```bash
npm i -D eslint-config-prettier
```

update .eslinrc in extends with

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

Ajout du fichier .prettierrc à la racine

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 150,
  "arrowParens": "avoid"
}
```

## Installation de husky

```bash
npx husky-init
```

Ajout des scripts suivants dans le package.json :

```json
  "check-types": "tsc --pretty --noEmit",
  "check-format": "prettier --check .",
  "check-link": "eslint . --ext ts --ext tsx --ext js",
  "format": "prettier --write .",
  "check-all": "npm run check-format && npm run check-lint && npm run check-types && npm run build"'
```

Ajout des messages dans le fichier .husky/pre-commit

## Installation des outils des tests unitaires

Explications : https://blog.jarrodwatts.com/how-to-set-up-nextjs-with-jest-react-testing-library-and-playwright

### Installation de Jest et React Testing Library

```bash
npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom identity-obj-proxy react-test-renderer
```

Suivre la configuration du blog de Jarrod Watts

### Quelques adaptations

#### absolute import bug

L'import de composant en absolue pose problème à Jest lors de l'exécution du test (cf exp)

Pour aider Jest à résoudre le problème d'import, il faut ajouter le dossier root (ici, '.') et ne pas oublier de remettre le dossier node_modules.
Dans le fichier jest.config.js :

```javascript
{
  ...,
  moduleDirectories: ['node_modules', '.'],
}
```

#### Garder les fichiers de tests près du code

Le système de route de Nextjs utilise les répertoires.
Lorsque l'on builde le site, et que l'on met des dossiers '**tests**' pour nos tests, Nextjs va les considérer comme des pages.
Une solution "officielle" consiste à préfixer ses pages avec des '.page.tsx' à l'aide du paramètre "pageExtensions" : https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions

Sur cette stack, la solution retenue est de ne builder uniquement les fichiers 'ts' ou 'tsx' et d'écrire les tests en Javascript

Dans le fichier next.config.js :

```javascript
{
  ...,
  pageExtensions: ['tsx', 'ts'],
}

```

<!---

```javascript
// solution de surcharge webpack non utilisée ici, permet d'ignorer les fichiers .test.js mais des pages __tests__ sont tout de même générées
webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.test.js$/,
      loader: 'ignore-loader',
    });

    return config;
  },
```

-->

### Ajout du script de test sur le pre-commit

```bash
# Check units tests (Jest & React Testing)
npm run test ||
(
    echo '❌ Units Tests Check Failed. Run npm run test, add changes and try commit again.';
    false;
)
```
