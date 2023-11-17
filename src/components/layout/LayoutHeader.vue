<script setup>
  import { ref } from 'vue'
  // import { RouterLink } from 'vue-router'
  import loneTermCareServices from '@/assets/images/logo_LoneTermCareServices.svg';
  import MinistryOfHealthAndWelfare from '@/assets/images/logo_MinistryOfHealthAndWelfare.svg';
  import iconBurgerOpen from '@/assets/images/icon_burger_open.svg';
  import iconBurgerClose from '@/assets/images/icon_burger_close.svg';
  import { useGetIsMobile } from '../../composables/useGetIsMobile.js';

  const { isMobileFlag } = useGetIsMobile()
  let isMenuOpen = ref(true);
  if(isMobileFlag.value) {
    isMenuOpen.value = false;
  }
</script>
<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="logo">
        <img class="logo__item" :src="loneTermCareServices" alt="LoneTermCareServices logo" />
        <img
          class="logo__item"
          :src="MinistryOfHealthAndWelfare"
          alt="MinistryOfHealthAndWelfare logo"
        />
      </div>
      <button class="burger burger--open" @click="isMenuOpen = !isMenuOpen">
        <img :src="iconBurgerOpen" alt="開啟選單的按鈕">
      </button>
      <nav class="menu__wrapper" v-show="isMenuOpen">
        <button class="burger burger--close" @click="isMenuOpen = !isMenuOpen">
          <img :src="iconBurgerClose" alt="開啟選單的按鈕">
        </button>
        <ul class="menu">
          <li class="menu__item menu__item--active">首頁</li>
          <li class="menu__item">照護現場</li>
          <li class="menu__item">一看就懂長照2.0</li>
          <li class="menu__item">長照地圖</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  &__wrapper {
    padding: 16px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include mobile {
      padding: 12px 16px;
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  gap: 24px;

  &__item {
    max-height: 40px;
    @include mobile {
      height: 30px;
    }
  }
}
.menu {
  @include reset-list;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    padding: 0 25px;
    border-right: 1px solid #e4e4e4;

    color: #333333;
    font-family: 'Noto Sans TC';
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 1.6px;
    cursor: pointer;

    &:last-child {
      border-right: none;
    }
    &--active {
      color: #ec6c00;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -3px;
        transform: translateX(-50%);
        width: 34px;
        height: 2px;
        background-image: url(@/assets/images/header_underline.svg);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
  }

  @include mobile {
    display: block;
    width: fit-content;
    margin: 20% auto 0 auto;

    &__wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(255, 255, 255, 1);
    }
    &__item {
      padding: 24px 0;
      border-right: none;
      border-bottom: 1px solid #e4e4e4;
      
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 2.4px;
      text-align: center;

      &:last-child {
        border-bottom: none;
      }
      &:after{
        content: none;
      }
    }
  }
}
.burger {
  display: none;
  &--close {
    margin-top: 15px;
    margin-right: 15px;
    margin-left: auto;
  }

  @include mobile {
    display: block;
  }
  @include reset-button;
}
</style>
