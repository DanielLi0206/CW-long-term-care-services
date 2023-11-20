<script setup>
  import Title from '../components/TitleItem.vue';
  import Button from '../components/ButtonItem.vue';
  import guidelinesImage1 from '@/assets/images/guideline_01.svg';
  import guidelinesImage2 from '@/assets/images/guideline_02.svg';
  import guidelinesImage3 from '@/assets/images/guideline_03.svg';

  const title = {
    first: '長照地圖',
    second: '厝邊好朋友',
    subtitle: 'LTCS Map',
  }

  const guidelinesData = [
    {
      image: guidelinesImage1,
      content: '透過左上角篩選功能，找到適合的服務機構',
    },
    {
      image: guidelinesImage2,
      content: '直接點擊地圖，定位篩選出範圍內的相關服務機構',
    },
    {
      image: guidelinesImage3,
      content: '點選下方篩選列表，觀看更詳細的聯絡資訊',
    },
  ];
</script>
<template>
  <section class="section">
    <Title :first="title.first" :second="title.second" :subtitle="title.subtitle"  />
    <div class="map">
      <div class="mask">
        <div class="guidelines">
          <div class="guidelines__item" v-for="(item, index) in guidelinesData" :key="index">
            <img
              :src="item.image"
              class="guidelines__image"
              :class="`delay__${index}`"
              :alt="item.content"
            >
            <p class="guidelines__tips">TIPS {{ index +1 }}</p>
            <p class="guidelines__content">{{ item.content }}</p>
          </div>
          <div class="guidelines__btn">
            <Button text="尋找附近的長照服務" href="https://ltcpap.mohw.gov.tw/public/index.html" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .section {
    padding-top: 120px;
    padding-bottom: 160px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 160px;
  }
  .map{
    border-radius: 0px 40px;
    border: 4px solid #CADEDF;
    background-color: rgba(255, 255, 255, 0.8);
    background-image: url(@/assets/images/map.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: lighten;
  }
  .mask {
    position: relative;
    margin: 30px;
    background-color: white;
    padding: 163px 230px 275px 230px;

    @include mobile {
      padding: 122px 0px 243px 0px;
      margin: 16px;
    }
  }
  .guidelines{
    display: flex;
    justify-content: center;
    gap: 75px;
    position: relative;

    &__item {
      max-width: 230px;

      &:nth-child(1) {
        margin-top: -40px;
      }
      &:nth-child(3) {
        margin-top: 60px;
      }
      @include mobile {
        &:nth-child(1) {
          margin-top: 0px;
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          display: none;
        }
      }
    }
    &__tips{
      margin: 0;
      color: #EC6C00;
      font-family: 'Lato';
      font-size: 14px;
      font-weight: 700;
      line-height: 140%; /* 19.6px */
      letter-spacing: 1.4px;
    }
    &__content{
      margin: 0;
      color: #333;
      font-family: 'Noto Sans TC';
      font-size: 16px;
      font-weight: 500;
      line-height: 160%; /* 25.6px */
      letter-spacing: 1.6px;
    }
    &__image{
      display: block;
      margin: auto;
      margin-bottom: 16px;
      animation: popup ease-in-out infinite;
      animation-fill-mode: forwards;
      animation-duration: 3s;
    }
    &__btn{
      position: absolute;
      bottom: -112px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .delay {
    &__0{
      animation-delay: 0s;
    }
    &__1{
      animation-delay: 1s;
    }
    &__2{
      animation-delay: 2s;
    }
  }

  @keyframes popup {
    0% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.1);
    }
    30% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>