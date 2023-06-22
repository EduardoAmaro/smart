<template>
  <div class="section section-mirrored">
    <div class="container-fluid">
      <div class="banners-container">
        <MirroredBanner v-for="index in 3" :key="index"></MirroredBanner>
      </div>
    </div>
  </div>
</template>

<script>
import MirroredBanner from '../banner/MirroredBanner.vue'

export default {
  components: {
    MirroredBanner,
  },
}
</script>

<style lang="scss">
.section-mirrored {
  margin-top: 120px;

  .banners-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
}
</style>
