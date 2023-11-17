import { onMounted, ref } from 'vue'

export function useGetIsMobile() {
  const userAgentInfo = navigator.userAgent;
  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  const isMobileFlag = ref(false);

  // 根據userAgent判斷是否是手機
  for (let v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      isMobileFlag.value = true;
      break;
    }
  }
  onMounted(() => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    // 根據屏幕分辨率判斷是否是手機
    if (screenWidth < 500 && screenHeight < 800) {
      isMobileFlag.value = true;
    }
  })

  return {
    isMobileFlag
  }
}