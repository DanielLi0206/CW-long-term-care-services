<script setup>
  import slideImage1 from '@/assets/images/slide_01.png';
  import slideImage2 from '@/assets/images/slide_02.png';
  import slideImage3 from '@/assets/images/slide_03.png';
  import Title from '../components/TitleItem.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  const modules = [Autoplay, Pagination, Navigation];

  const slideData = [
    {
      image: slideImage1,
      title: '面對照顧壓力大？張曼娟：\n記得提醒自己，這一切都會過去的',
      subtitle: '各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。',
      urlPath: 'https://www.cw.com.tw/article/5125049',
    },
    {
      image: slideImage2,
      title: '小六生可能已是照顧者\n日本小學生與失智者共開店',
      subtitle: '當我們擔心學童與失智者接觸的安危，日本小學已納入課程...',
      urlPath: 'https://www.cw.com.tw/article/5124631',
    },
    {
      image: slideImage3,
      title: '不想活得又老又窮\n避開50歲最後悔的5個財務決定',
      subtitle: '「早知道會活那麼久，當初就……」',
      urlPath: 'https://www.cw.com.tw/article/5123858',
    },
  ];

  const title = {
    first: '照顧現場',
    second: '預見安心變老',
    subtitle: 'LTCS LIVE',
  }

  function redirect(url) {
    window.open(url, '_blank');
  }

</script>
<template>
  <section class="section">
    <Title :first="title.first" :second="title.second" :subtitle="title.subtitle"  />
    <swiper
      :slidesPerView="'auto'"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in slideData" class="slide" @click="redirect(item.urlPath)">
        <img :src="item.image" class="slide__image" :alt="item.title">
        <div class="slide__content">
          <h3 class="slide__title">{{ item.title }}</h3>
          <h4 class="slide__subtitle">{{ item.subtitle }}</h4>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
<style lang="scss" scoped>
  .section{
    padding-top: 120px;
    @include mobile {
      padding-top: 56px;
      padding-bottom: 56px;
    }
  }
  .mySwiper {
    margin-left: 40px;
    border-radius: 40px 0 0 0;

    @include mobile {
      margin-left: 24px;
    border-radius: 16px 0 0 0;
    }
  }
  .swiper {
    &-slide {
      width: 66.319%;
      cursor: pointer;
      &:hover{
        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 50%,rgba(0,0,0,0.8) 100%);
        }
      }
      @include mobile {
        &:hover:after {
          content: none;
        }
      }
    }

    @include mobile {
      &-slide {
        width: 93.16%;
      }
    }
  }
  .slide{
    &__content{
      position: absolute;
      left: 50%;
      top: 57.656%;
      z-index: 5;
      transform: translateX(-50%);
      width: inherit;

      &:after{
        content: '';
        position: absolute;
        left: 0;
        bottom: -40px;
        width: 215px;
        height: 17px;
        background-image: url(@/assets/images/slide_title_underline.svg);
        background-repeat: no-repeat;
        background-size: cover;
      }

      @include mobile {
        position: relative;
        left: 0;
        top: 0;
        transform: none;
        width: 100%;
        padding-bottom: 32px;
        margin-bottom: 27px;

        &:after{
          width: 210px;
          bottom: 0px;
        }
      }
    }
    &__image {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    &__title{
      margin: 0  0 8px 0;
      white-space: pre-wrap;
      color: white;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      font-family: 'Noto Sans TC';
      font-size: 32px;
      font-weight: 700;
      line-height: 140%; /* 44.8px */
      @include mobile {
        color: #222;
        font-size: 20px;
        text-shadow: none;
      }
    }
    &__subtitle{
      margin: 0;
      color: white;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      font-family: 'Noto Sans TC';
      font-size: 16px;
      font-weight: 400;
      line-height: 160%; /* 25.6px */
      letter-spacing: 1.6px;
      @include mobile {
        color: #222;
        font-size: 14px;
        letter-spacing: 1.4px;
        text-shadow: none;
      }
    }
  }
</style>
<style lang="scss">
  .swiper {
    &-button{
      &-next{
        width: 64px;
        height: 64px;
        background-image: url(@/assets/images/slide_arrow.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        right: 20.833%;
        &:after {
          content: none;
        }
        @include mobile {
          width: 32px;
          height: 32px;
          right: 40px;
          top: 94px;
        }
      }
      &-prev{
        &:after {
          content: none;
        }
      }
    }
    &-pagination {
      &-bullet{
        background-color: transparent;
        border: 1.5px solid #CADEDF;
        opacity: 1;
        &-active{
          background-color: #EC6C00;
          border: 1.5px solid transparent;
        }
      }
    }
  }
  .mySwiper .swiper-pagination-bullets{
    width: initial;
    left: 11%;
    bottom: 10%;

    @include mobile {
      left: 0;
      bottom: 0;
    }
  }
</style>