# actions

* Subject: GitHub ActionsでmainとdevelopブランチへのPull Requestに対して自動テストを設定する


Github Actionsを用いてNode.jsでCI（Unit Testを自動実行してPassしている状態を保つ、を意図）する方法を記載する。

次を目的とする。

* masterとdevelopブランチに対するPull Requestが作成された際に、**Request元のブランチ**に対して「`npm run test`」が実行されるようにする
