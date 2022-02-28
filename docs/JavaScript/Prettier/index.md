# Prettier

JavaScriptの記述ルールを定義する拡張

Eslintと組み合わせて使うとよい

[Eslintについて](/JavaScript/Eslint/)

## インストール

下記コマンドでインストール

```powershell
npm i --save-dev prettier
```

`yarn`なら下記

```powershell
yarn add -D prettier
```

## 設定

ルートディレクトリに`.prettierrcを作成し、下記を記載する。

```json
{
    "printWidth": 80,
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": true,
    "endOfLine": "crlf",
    "htmlWhitespaceSensitivity": "ignore"
}
```
