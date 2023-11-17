<script setup>
  const title = defineProps({
    first: String,
    second: String,
    subtitle: String,
  })
</script>
<template>
  <div class="title__wrapper">
    <div class="subtitle">{{ title.subtitle }}</div>
    <div class="title">
      <h2 class="title__first">
        {{ title.first  }}
      </h2>
      <h2 class="title__second">
        {{ title.second   }}
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    &__first{
      margin: 0;
      color: #333;
      font-family: 'Noto Sans TC';
      font-size: 40px;
      font-weight: 700;
      line-height: 130%; /* 41.6px */
      letter-spacing: 8px;

      @include mobile {
        font-size: 32px;
        letter-spacing: 6.4px;
      }
    }
    &__second{
      margin: 0;
      color: #008088;
      font-family: 'Noto Sans TC';
      font-size: 40px;
      font-weight: 700;
      line-height: 130%; /* 41.6px */
      letter-spacing: 8px;

      @include mobile {
        font-size: 32px;
        letter-spacing: 6.4px;
      }
    }
    &__wrapper {
      // margin-top: 120px;
      max-width: 910px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 32px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 24px;

      @include mobile {
        flex-direction: column-reverse;
        gap: 16px;
        // margin-top: 56px;
        margin-bottom: 24px;
        margin-left: 24px;
      }
    }
  }
  .subtitle {
    color: #008088;
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 4.2px;
    position: relative;
    padding-top: 8px;
    writing-mode: vertical-lr;
    &:before{
      content: '';
      position: absolute;
      top: 8px;
      left: -9px;
      width: 1px;
      height: 19px;
      background-image: url(@/assets/images/title_line.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    @include mobile {
      padding-top: 0px;
      padding-left: 1px;
      writing-mode: inherit;
      &:before{
        content: '';
        top: 9px;
        left: 10px;
        transform: rotate(270deg);
      }
    }
  }
</style>