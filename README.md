# Vuedation

> ポートフォリオ用リポジトリ　参照サイト:[「現場で使えるVue.js 3.X 実践ガイド 」](https://github.com/monsterdive-web-div/vue3x_books)

![cover](https://user-images.githubusercontent.com/5172584/196716094-170eda28-073f-4fbe-b56b-1eb0377fb5ec.gif)

旧オリジナル"Vuedation"からVue3+Vite仕様に作り直してポートフォリオ用に再公開しました。

諸々最新環境で動くようにはしています。

## セットアップ

テンプレートを手動でセットアップするには、まず Git でダウンロードします。

```bash
 git clone git@github.com:annrie/Vuedation.git projectname
 cd projectname
```

## インストール

その後、コマンドラインでフォルダを開き、必要な依存関係をインストールします。 npm も使えますが、yarn2 を使用しています。

```bash
yarn set version berry #  Setup of yarn2
echo "nodeLinker: node-modules" > .yarnrc.yml
yarn install
```

インストールすると、.envファイルが作成されています。必要ならfirebase関係の認証アカウントを設定してください。

最後に、 `yarn dev` を実行して サーバーを立ち上げます。 完成したサイトは、次の URL で表示可能な distというフォルダーに作成されます。

```bash
http://localhost:3000
```

## ライセンス

[MIT](https://github.com/annrie/Vuedation/blob/master/LICENSE)
Copyright &copy; 2020-present, Annrie
