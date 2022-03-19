# モジュールでリソースを定義する

利用したいリソースをモジュールとして定義することで、同じテンプレを使いまわしすることができる。
似たようなリソースを複数作成したいときに便利。
そのほか関心事の分離にも一役買うので、分割しておいて損はない。

## How to use

構造はこんな感じ

```
.
┣ module
┃  ┣ hoge
┃  ┃  ┣ main.tf
┃  ┃  ┣ variables.tf
┃  ┃  ┗ output.tf
┃  ┗ fuga
┃     ┣ main.tf
┃     ┣ variables.tf
┃     ┗ output.tf
┣ main.tf
┣ variable.tf
┗ output.tf
```

./main.tf

```yaml
module "hoge_resource" {
    source = "./module/hoge"
}

module "fuga_resource_prod" {
    source = "./module/fuga"
    hoge_env = module.hoge_resource.env
}

module "fuga_resource_dev" {
    source = "./module/fuga"
}
```

./variable.tf

```yaml
variable "hoge_env" {
    default = "hogehoge"
}
```

./module/hoge/main.tf

```yaml
resource "hoge" "hoge_resource" {
    env = var.hoge_env
}
```

./module/hoge/variable.tf

```yaml
variable "hoge_env" {
    default = "hogehoge"
}
```

./module/hoge/output.tf

```yaml
output "env" {
    value = hoge.hoge_resource.env
}
```
