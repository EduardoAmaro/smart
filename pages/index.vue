<template>
  <main>
    <HomeSlider />
    <FullbannerStrip />
    <IconsBanner />
    <ProductsSlider />
    <MirroredBanners />
    <BrandsSlider />
  </main>
</template>

<script>
import HomeSlider from '~/components/home/HomeSlider.vue'
import FullbannerStrip from '~/components/home/FullbannerStrip.vue'
import IconsBanner from '~/components/home/IconsBanner.vue'
import ProductsSlider from '~/components/home/ProductsSlider.vue'
import MirroredBanners from '~/components/home/MirroredBanners.vue'
import BrandsSlider from '~/components/home/BrandsSlider.vue'

export default {
  components: {
    HomeSlider,
    FullbannerStrip,
    IconsBanner,
    ProductsSlider,
    MirroredBanners,
    BrandsSlider,
  },
}
</script>
