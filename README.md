#### Vercelリンク
* https://today-s-sky.vercel.app/
---
#### 使用技術
* React
---
#### 使用API
(天気API)
*  https://weather.tsukumijima.net/api/forecast/city/130010

(都道府県API)
*  https://geoapi.heartrails.com/api/json?method=getPrefectures
---
今回はAPIを使い天気予報アプリを作りました。

地方の選択肢は配列に書いていて、選択したらoptionのvalueで条件分岐をして、その地方の都道府県をAPIから取得しています。

そして、検索ボタンを押したら選択した都道府県のvalueを確認して天気APIで気温や降水確率などの情報を天気APIを通して取得して表示しています。

都道府県それぞれのAPIのナンバーの変化が一定じゃないのでfor文やif文などを組み合わせて割り当てています。
