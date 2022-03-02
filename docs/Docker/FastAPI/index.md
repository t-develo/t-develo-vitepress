# FastAPIコンテナ

公式：<https://fastapi.tiangolo.com/ja/deployment/docker/>

公式でDockerコンテナを提供してくれている

```Dockerfile
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

COPY ./app /app
```

ディレクトリ構造は下記

```txt
/
┣ app
┃  ┣ main.py
┃  ...
┗ Dockerfile
```

こうしておけば、コンテナをビルドしたら自動でappディレクトリの `.py` ファイルがCOPYされてFastAPIコンテナで実行できるようになる

コンテナイメージの容量を下げたい場合は `python3.9-slim` タグで容量の小さい奴を利用することができる
詳細：<https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker#supported-tags-and-respective-dockerfile-links>
