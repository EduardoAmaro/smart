<template>
  <main>
    <HomeSlider />
    <FullbannerStrip />
  </main>
</template>

<script>
import HomeSlider from '~/components/home/HomeSlider.vue'
import FullbannerStrip from '~/components/home/FullbannerStrip.vue'

export default {
  components: {
    HomeSlider,
    FullbannerStrip,
  },
}
</script>
