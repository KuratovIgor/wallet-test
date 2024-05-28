import { onMounted, computed, ref } from 'vue'

export const useMobile = () => {
  const TABLET_SIZE = 905
  const MOBILE_SIZE = 500

  const screenSize = ref(0)

  const isTablet = computed(() => MOBILE_SIZE < screenSize.value && screenSize.value <= TABLET_SIZE)
  const isMobile = computed(() => screenSize.value <= MOBILE_SIZE)

  onMounted(() => {
    screenSize.value = window.innerWidth

    window.addEventListener('resize', (event: Event) => {
      if (event.target && event.target instanceof Window) {
        screenSize.value = event.target.innerWidth
      }
    })
  })

  return {
    isMobile,
    isTablet
  }
}
