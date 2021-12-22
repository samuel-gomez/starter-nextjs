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
