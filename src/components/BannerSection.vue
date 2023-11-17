<script setup>
  import bannerBackgroundImage from '@/assets/images/banner_main.png';
  import titlePc from '@/assets/images/banner_title_pc.svg';
  import titleMobile from '@/assets/images/banner_title_mobile.svg';
  import arrow from '@/assets/images/icon_scroll.svg';
  function scrollToForeword() {
    const anchor = document.querySelector('#foreword')
    document.documentElement.scrollTop = anchor.offsetTop - 150
  }
</script>
<template>
  <section class="banner">
    <img class="banner__title banner__title--pc" :src="titlePc" alt="照顧壓力別都擔在自己身上，讓專業的來！4個照顧現場故事，看見你的問題解發。">
    <img class="banner__title banner__title--mobile" :src="titleMobile" alt="照顧壓力別都擔在自己身上，讓專業的來！4個照顧現場故事，看見你的問題解發。">
    <img class="banner__image" :src="bannerBackgroundImage" alt="background image">
    <img class="arrow" :src="arrow" @click="scrollToForeword" alt="箭頭按鈕 點擊後會滾動到下一個區塊">
  </section>
</template>

<style lang="scss" scoped>
  .banner{
    position: relative;

    @include mobile {
      &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 250px;
        width: 100%;
        background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.5) 30%,rgba(255,255,255,1) 100%);
      }
    }

    &__title {
      position: absolute;
      top: 20%;
      left: 50%;
      z-index: 5;
      animation: fadeInPC ease-in 1;
      animation-fill-mode: forwards;
      animation-duration: 1s;
      &--pc{
        display: block;
      }
      &--mobile{
        display: none;
      }

      @include mobile {
        width: 80%;
        top: auto;
        bottom: 64px;
        transform: translateX(-50%);
        animation: fadeInMobile ease-in 1;
        // animation-fill-mode: forwards;
        animation-duration: 1s;

        &--pc{
          display: none;
        }
        &--mobile{
          display: block;
        }
      }
    }
    &__image{
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      @include mobile {
        height: 667px;
      }
    }
  }
  .arrow {
    position: absolute;
    // bottom: 80px;
    left: 20%;
    cursor: pointer;
    animation: fadeInArrow ease-in-out 1;
    animation-fill-mode: forwards;
    animation-iteration-count:infinite;
    animation-duration: 1s;
    &:hover {
      animation-play-state: paused;
    }

    @include mobile {
      display: none;
    }
  }

  @keyframes fadeInPC {
    0% {
      opacity: 0;
      top: 25%
    }
    100% {
      opacity: 1;
      top: 20%
    }
  }
  @keyframes fadeInMobile {
    0% {
      opacity: 0;
      bottom: 0;
    }
    100% {
      opacity: 1;
      bottom: 64px;
    }
  }

  @keyframes fadeInArrow {
    0% {
      bottom: 100px;
    }
    50% {
      bottom: 80px;
    }
    100% {
      bottom: 100px;
    }
  }

</style>