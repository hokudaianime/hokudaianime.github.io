# 北海道大学アニメーション研究会公式webサイト

[北海道大学アニメーション研究会の公式webサイト](https://www.hokudaianime.com/)のリポジトリです。

## 自分のパソコン内でサイトを確認する方法

Dockerを用いてローカルのマシンでサイトの動作を確認できるようにしてあります。

### 手順

前提：Git、Dockerのインストール、dockerの起動が完了していること

1. 作業フォルダをつくりたいフォルダでターミナル(WindowsならコマンドプロンプトやPowerShell、Macならターミナル)を開きます([このページ](https://aadojo.alterbooth.com/entry/2023/01/17/110000)を参考にするとよい)
2. ターミナルに`git clone https://github.com/hokudaianime/hokudaianime.github.io.git`と入力する(Gitリポジトリのクローンと呼ばれる作業です。GitHubからサイトのデータをダウンロードします)
3. クローンが完了したらターミナルに`cd hokudaianime.github.io`と入力する(ターミナル上で作業フォルダの中に入ります)
4. ターミナルに`docker compose up`と入力する
5. webブラウザのURL入力欄に`localhost:4000`と入力する。サイトが見えるはずです
6. 終了するときはターミナルでCtrlを押しながらCを押す

2回目からは`hokudaianime.github.io`フォルダでターミナルを起動し、4.からの手順を行います。

フォルダの内容を最新に更新したいときは`hokudaianime.github.io`フォルダで`git pull`を入力します