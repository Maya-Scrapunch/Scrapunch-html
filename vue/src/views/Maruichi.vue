<script setup lang="js">
</script>

<template>
  <dev class="absolute-left-top">
    <main>
      <v-container>
        <v-card
        width="900">
          <v-container>
            <v-card flat width="850">
              <v-card>
                <div style="display: flex; align-items: center; height: 250px;">
                <div style="width: 2000px;">
                    <p class="store-name">ＭＡＲＵ壱</p>
                    <p class="store-description">湖南のそば粉を用いた手打ちのおそば屋さん</p>
                    <br>
                    <br>
                    <br>
                    <v-btn class="rounded-button">和食</v-btn>
                </div>
                <img src='../assets/img/maruichi/outside.jpg' alt="外部の画像" width="200" height="250">
                </div>

                </v-card>

              <v-card flat class="margin-top-40px" title="矢沢永吉ファンの店主がつくる絶品そば">
                <div style="display: flex;">
                    <img src='../assets/img/maruichi/tempurasoba.jpg' alt="外部の画像" width="250" height="200" style="padding-left: 16px;">
                <v-container>
                    <v-card class="yellow-card">
                    <p class="text-justify-center">風味が良いとされる湖南の蕎麦粉を使った手打ち蕎麦をいただけるのがこちらのお店。<br>
                        地元民なら誰もが知っている有名店です。</p>
                    </v-card>
                </v-container>
                </div>
              </v-card>

              <v-card flat class="margin-top-40px">
                <div style="display: flex;">
                <v-container>
                    <v-card class="yellow-card">
                    <p class="text-justify-center">福島県は全国有数のそば畑の規模を誇る県です。<br>
                    蕎麦は、猪苗代湖周辺の機構では標高500～700mが適地といわれ、湖南の蕎麦の風味が脚光を浴びています。<br>
                    MARU壱の店主は、大の矢沢永吉ファンで、気分が良いと矢沢永吉の真似をしてくれるそうです。<br>
                    湖南地方の蕎麦を味わいたい方、地元住民との交流を楽しみたい方は必見です！</p>
                    </v-card>
                </v-container>
                    <img src='../assets/img/maruichi/inside.jpg' alt="外部の画像" width="300" height="250">
                </div>
              </v-card>
            </v-card>
        </v-container>
        </v-card>
    </v-container>
  </main>
  </dev>
</template>

<style scoped>
.absolute-left-top {
  position: absolute;
  top: 70px;
  left: 250px;
}
.rounded-button {
  border-radius: 25px; /* 丸い角の半径を設定 */
  background-color: #ffcccc; /* 薄い赤色の背景色を設定 */
  color: black; /* テキストの色を白に設定 */
}

.yellow-card {
    width: 550px; /* カードの幅を設定 */
    background-color: rgba(255, 253, 208, 0.6);
    padding: 20px; /* 必要に応じて余白を設定 */
}
.margin-top-40px {
    margin-top: 40px;
}
/* 店名のスタイル */
.store-name {
    font-size: 24px; /* 文字の大きさを変更 */
    font-weight: bold; /* ボールド体にする */
    margin-bottom: 10px; /* 下のテキストとの間に余白を追加 */
}

/* 店の紹介文のスタイル */
.store-description {
    font-size: 18px; 
    margin-top: 10px;
}

.text-justify-center {
    justify-content: center !important;
    text-align: left;
}
</style>


<!-- <v-row>
    <v-col>
        <img src='../assets/img/maruichi/outside.jpg' alt="外部の画像" width="200" height="250">
    </v-col>
    <v-col>
        <img src='../assets/img/maruichi/inside.jpg' alt="外部の画像" width="250" height="200">
    </v-col>
    <v-col>
        <img src='../assets/img/maruichi/tempurasoba.jpg' alt="外部の画像" width="250" height="200">
    </v-col>

    <v-card class="yellow-card">
                    福島県は全国有数のそば畑の規模を誇る県です。<br>
                    蕎麦は、猪苗代湖周辺の機構では標高500～700mが適地といわれ、湖南の蕎麦の風味が脚光を浴びています。<br>
                    その蕎麦粉を使った手打ち蕎麦をいただけるのがこちらのお店、「MARU壱」。<br>
                    地元民なら誰もが知っている有名店です。<br>
                    MARU壱の店主は、大の矢沢永吉ファンで、気分が良いと矢沢永吉の真似をしてくれるそうです。<br>
                    湖南地方の蕎麦を味わいたい方、地元住民との交流を楽しみたい方は必見です！
                    </v-card>
</v-row> -->