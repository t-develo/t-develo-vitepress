# Custom Containers

Zennとかでよくあるtipsやwarning等を出す方法

::: tip
tipの出し方
:::

```markdown
::: tip
tipの出し方
:::
```

::: warning
warningの出し方
:::

```markdown
::: warning
warningの出し方
:::
```

タイトルを変えることもできる

::: info ほげほげ
ほげほげInfo
:::

```markdown
::: info ほげほげ
ほげほげInfo
:::
```

中にコードスニペットを入れることも可能

:::danger

```javascript
console.log('dangerous warning');
```

:::

````markdown
:::danger
```javascript
console.log('dangerous warning');
```
:::
````

折りたたみをしたいときは下記を参考に

::: details

```javascript
console.log('detail');
```

:::

````markdown
::: details
```javascript
console.log('detail');
```
:::
````
