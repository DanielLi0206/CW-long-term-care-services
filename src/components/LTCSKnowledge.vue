<script setup>
  import Title from '../components/TitleItem.vue';
  import Button from '../components/ButtonItem.vue';
  import cardImage1 from '@/assets/images/card_01.png';
  import cardImage2 from '@/assets/images/card_02.png';
  import cardImage3 from '@/assets/images/card_03.png';

  const title = {
    first: '5分鐘一看就懂',
    second: '長照2.0',
    subtitle: 'LTCS KNOWLEDGE',
  }

  const cardData = [
    {
      image: cardImage1,
      title: '服務對象',
      content: '經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。',
    },
    {
      image: cardImage2,
      title: '申請流程',
      content: '1.直接撥打長照專線1966\n2.聯絡當地長期照顧管理中心\n3.住院期間聯絡出院準備銜接長照服務小組或是線上申請',
    },
    {
      image: cardImage3,
      title: '服務內容',
      content: '依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。',
    },
  ]
</script>
<template>
  <section class="section">
    <Title :first="title.first" :second="title.second" :subtitle="title.subtitle"  />
    <div class="wrapper">
      <div class="card" v-for="(item, index) in cardData" :key="index">
        <img :src="item.image" class="card__image" :alt="item.title">
        <h3 class="card__title">{{ item.title }}</h3>
        <p class="card__content">{{ item.content }}</p>
      </div>
      <div class="callToAction">
        <Button text="了解更多長照2.0" href="https://ltcpap.mohw.gov.tw/public/index.html" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section {
    padding-top: 120px;
    // position: relative;
  }
  .wrapper {
    position: relative;
    width: fit-content;
    margin: auto;
    padding-bottom: 124px;
    display: flex;
    justify-content: center;
    gap: 75px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 430px;
      height: 28px;
      background-image: url(@/assets/images/visual_line.svg);
      background-repeat: no-repeat;
      block-size: content;
    }

    @include mobile {
      // margin-left: 40px;
      // margin-right: 40px;
      margin-left: 24px;
      margin-right: 24px;
      flex-direction: column;
      gap: 24px;
      &::before {
        content: none;
      }
    }
  }
  .card {
    text-align: center;
    &:nth-child(2) {
      margin-top: -40px;
      @include mobile {
        margin-top: 0;
      }
    }
    &__image {
      border-radius: 50%;
      border: 2px solid #008088;
      padding: 6px;
      margin-bottom: 16px;
    }
    &__title {
      color: #008088;
      font-family: 'Noto Sans TC';
      font-size: 20px;
      font-weight: 700;
      line-height: 140%; /* 28px */
      letter-spacing: 2px;
      text-align: left;
      margin-top: 0;
      margin-bottom: 4px;
    }
    &__content {
      color: #333;
      // text-align: justify;
      font-family: 'Noto Sans TC';
      font-size: 14px;
      font-weight: 400;
      line-height: 170%; /* 23.8px */
      letter-spacing: 0.56px;
      text-align: left;
      margin: 0;
      white-space: pre-wrap;
      max-width: 230px;

      @include mobile {
        max-width: 100%;
      }
    }
  }
  .callToAction {
    position: absolute;
    bottom: 35px;
    right: 0;

    @include mobile {
      position: static;
      text-align: center;
    }
  }
</style>