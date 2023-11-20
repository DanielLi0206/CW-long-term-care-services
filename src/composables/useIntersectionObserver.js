import { ref } from 'vue';

export function useIntersectionObserver() {
  const observedElement = ref("");
  const elementClass = ref("");
  const interOptions = (rootPar, thresholdPar) => {
    return {
      root: rootPar,
      threshold: thresholdPar,
    };
  };
  const reserveCallback = (entries) => {
    const entry = entries[0];
    // entry.isIntersecting是一個布林值，代表元素是否進入畫面
    if (entry.isIntersecting) {
      observedElement.value.classList.add(elementClass.value);
      // 進入畫面後，就把觀察者取消掉
      observer.unobserve(entry.target);
    }
  }

  // 初始化一個觀察者模式來觀察元素是否進入畫面
  const observer = new IntersectionObserver(reserveCallback,interOptions);

  return {
    observedElement,
    elementClass,
    interOptions,
    observer,
  }
}