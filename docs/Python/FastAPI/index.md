# FastAPI

公式：<https://fastapi.tiangolo.com/ja/>

Webアプリケーションフレームワーク

特にAPIのエンドポイントを簡単に作成することができる。
APIを作成したら自動でSwaggerのドキュメントも作成される便利仕様となっており、使い勝手がいい

## コーディング例

下記のように、FastAPIをimportして利用する
APIの定義は `@app` と、その直下の `def XXXX` のワンセットで行う

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

`async/await` を使った例はこちら

::: tip async/awaitを使う

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

:::
