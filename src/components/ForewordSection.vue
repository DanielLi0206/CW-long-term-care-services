<script setup>
  import forewordImage from '@/assets/images/foreword_image.png';
  import subTitle from '@/assets/images/foreword_subtitle.svg';
  import { useIntersectionObserver } from '@/composables/useIntersectionObserver.js';
  import { useGetIsMobile } from '@/composables/useGetIsMobile.js';
  import { onMounted, ref } from 'vue';

  const { isMobileFlag } = useGetIsMobile()
  if(!isMobileFlag.value) {
    const options = {
      root: null,
      threshold: 1,
      rootMargin: "0px 0px 0px 0px",
      onece: true,
    };
    const { observedElement, elementClass, observer } = useIntersectionObserver(options);
  }
  onMounted(() => {
    if(!isMobileFlag.value) {
      observedElement.value = document.querySelector('#foreword');
      elementClass.value = 'foreword__translate--after';
      observer.observe(observedElement.value);
    }
  });
</script>
<template>
  <section id="foreword" class="foreword" :class="{'foreword__translate--before' : !isMobileFlag}">
    <div class="imagery">
      <img class="imagery__image" :src="forewordImage" alt="長期照護情境照" />
    </div>
    <div class="foreword__content">
      <h1 class="foreword__title">長照2.0，<br>讓照顧的路上有專業相挺</h1>
      <img class="foreword__subtitle" :src="subTitle" alt="LONG TERM CARE SERVICES">
      <article class="foreword__aritcle">
        台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。
        老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。
        「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。
        <br /><br />
        面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin translateAfter() {
  opacity: 1;
  transform: translateX(0);
  transition: all 1s ease;
}
.foreword{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 121px;
  margin-top: 120px;
  margin-bottom: 50px;
  @include mobile {
    display: block;
    gap: 0;
    margin: 56px 24px;
  }
  &__content {
    position: relative;
    max-width: 430px;
    
    @include mobile {
      max-width: 100%;
    }

    &:before {
      content: '';
      width: 24px;
      height: 277px;
      position: absolute;
      top: 0;
      left: -46px;
      background-image: url(@/assets/images/foreword_subtitle_vertical.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0 0;

      @include mobile {
        display: none;
      }
    }
    &:after {
      content: '';
      width: 215px;
      height: 2px;
      position: absolute;
      right: 0;
      bottom: -80px;
      background-image: url(@/assets/images/foreword_line.svg);
      background-repeat: no-repeat;
      background-size: contain;
      background-position: 0 0;

      @include mobile {
        bottom: -40px;
      }
    }
  }
  &__title{
    margin-top: 16px;
    margin-bottom: 16px;
    color: #008088;
    // font-family: 'Noto Sans TC';
    font-size: 32px;
    font-weight: 700;
    line-height: 44.8px;
    letter-spacing: 6.4px;
  }
  &__subtitle {
    display: none;
    @include mobile {
      display: block;
      max-width: 237px;
      margin-bottom: 16px;
    }
  }
  &__aritcle {
    color: #333;
    // font-family: 'Noto Sans TC';
    font-size: 16px;
    font-weight: 500;
    line-height: 30.4px;
    letter-spacing: 1.6px;
  }
  &__translate{
    &--before{
      .imagery {
        opacity: 0;
        transform: translateX(-550px);
      }
      .foreword__content {
        opacity: 0;
        transform: translateX(550px);
      }
    }
    &--after{
      .imagery {
        @include translateAfter;
      }
      .foreword__content {
        @include translateAfter;
      }
    }
  }
}
.imagery {
  padding-left: 42.65px;
  padding-bottom: 56px;
  background-image: url(@/assets/images/foreword_wrapper.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  &__image {
    width: 360px;
    height: 420px;
  }
  @include mobile {
    display: none;
  }
}
</style>
