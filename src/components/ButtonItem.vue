<script setup>
  import icon from '@/assets/images/button_arrow.svg';
  defineProps({
    text: String,
    href: String,
  })
</script>
<template>
  <a :href="href" rel="nofollow noopener" class="btn">
    {{ text }}
    <img :src="icon" class="icon" alt="button">
  </a>
</template>
<style lang="scss" scoped>
  .btn {
    position: relative;
    display: block;
    padding-left: 40px;
    padding-top: 22px;
    padding-bottom: 22px;
    width: 290px;
    border-radius: 60px;
    border: none;
    background: #008088;
    color: #FFF;
    font-family: 'Noto Sans TC';
    font-size: 20px;
    font-weight: 700;
    line-height: 100%; /* 20px */
    letter-spacing: 2px;
    text-align: left;
    cursor: pointer;
    text-decoration: none;

    @include mobile {
      width: 237px;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 32px;
      font-size: 16px;
      letter-spacing: 1.6px;
    }
  }
  .icon {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    padding: 16px;
    background-color: #CADEDF;
    border-radius: 50%;
    @include mobile {
      width: 24px;
      height: 24px;
      padding: 12px;
    }
  }
</style>