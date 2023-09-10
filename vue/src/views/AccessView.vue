<script setup lang="js">
</script>

<template>
  <main>
  <div class="absolute-center">
    <div class="display-flex">
      <div class="access-div">
        <p class="section-title">アクセス</p>
        <div class="location">
          <p>所在地：</p>
          <p>〒963-1633 福島県郡山市</p>
        </div>
      </div>
      <div class="iframe-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101468.49156298829!2d140.0041033490985!3d37.36877105139305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6020038e1f522965%3A0xdd7b994fb29864c8!2z44CSOTYzLTE2MzMg56aP5bO255yM6YOh5bGx5biC5rmW5Y2X55S656aP6Imv!5e0!3m2!1sja!2sjp!4v1694315607558!5m2!1sja!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="access-div-car">
        <div class="location">
          <p>東京から湖南まで車のアクセス：</p>
          <p>川口JCTから郡山南ICまで2時間10分</p>
          <p>郡山南ICから湖南町福良まで30分</p>
        </div>

    </div>
  </div>

  </main>
</template>

<style scoped>
.absolute-left-top {
  position: absolute;
  top: 70px;
  left: 0;
}

.absolute-center {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.display-flex {
  display: flex;
}
.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.access-div {
  margin-left: 0px; 
  width: 500px;
  background-color: #f0f0f0;
}
.access-div-car {
  margin-left: 0px; 
  width: 1000px;
  background-color: #f0f0f0;
}
.location {
  padding: 10px;
  border-radius: 5px;
}

.location p {
  margin: 0;
  padding: 5px 0;
}

.location p:first-child {
  font-weight: bold;
}
.display-flex {
  display: flex;
  justify-content: space-between; /* 子要素を水平に配置 */
  background-color: #f0f0f0;
  }
</style>