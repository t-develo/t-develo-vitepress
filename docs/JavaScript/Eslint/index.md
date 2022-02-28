# Eslintの設定

VSCodeでEslintを使って開発を行う際のメモ

Prettierについては[こちら](/JavaScript/Prettier/)

## インストール

下記コマンドでインストール

```powershell
npm i --save-dev eslint eslint-config-google eslint-config-prettier eslint-plugin-prettier
```

`yarn`なら下記

```powershell
yarn add -D eslint eslint-config-google eslint-config-prettier eslint-plugin-prettier
```

## 設定

ルートディレクトリに`.eslintrc.jsを作成し、下記を記載する。

`npx eslint --init` でもファイルを作成することができるが、ぶっちゃけコピペの方が早い。

```javascript
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "google",
        "prettier",
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [],
    rules: {},
};

```
