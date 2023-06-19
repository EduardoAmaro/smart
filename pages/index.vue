<template>
  <main>
    <HomeSlider />
    <FullbannerStrip />
    <IconsBanner />
  </main>
</template>

<script>
import HomeSlider from '~/components/home/HomeSlider.vue'
import FullbannerStrip from '~/components/home/FullbannerStrip.vue'
import IconsBanner from '~/components/home/IconsBanner.vue'

export default {
  components: {
    HomeSlider,
    FullbannerStrip,
    IconsBanner,
  },
}
</script>
