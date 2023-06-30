<template>
  <main>
    <HomeSlider />
    <FullbannerStrip />
    <IconsBanner />
    <ProductsSlider title="Produtos em destaque" />
    <MirroredBanners />
    <BrandsSlider />
  </main>
</template>

<script>
import HomeSlider from '~/components/index/HomeSlider.vue'
import FullbannerStrip from '~/components/index/FullbannerStrip.vue'
import IconsBanner from '~/components/index/IconsBanner.vue'
import ProductsSlider from '~/components/common/ProductsSlider.vue'
import MirroredBanners from '~/components/index/MirroredBanners.vue'
import BrandsSlider from '~/components/index/BrandsSlider.vue'

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
