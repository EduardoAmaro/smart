<template>
  <main>
    <HomeSlider :banners="fullbannerBanners" />
    <FullbannerStrip />
    <IconsBanner :banners="iconBanners" />
    <ProductsSlider :tag="tags[0].attributes" :products="taggedProducts" />
    <MirroredBanners :banners="mirroredBanners" />
    <BrandsSlider :brands="brands" />
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

  // use destructuring to get the $strapi instance from context object
  async asyncData({ $strapi, store }) {
    try {
      // fetch data from strapi
      const fullbannerBanners = await (
        await fetch(`${store.state.apiUrl}/home-fullbanners?populate=*`)
      ).json()

      const brands = await (
        await fetch(`${store.state.apiUrl}/home-brand-swippers?populate=*`)
      ).json()

      const iconBanners = await (
        await fetch(`${store.state.apiUrl}/home-icons-banners?populate=*`)
      ).json()

      const mirroredBanners = await (
        await fetch(`${store.state.apiUrl}/home-mirrored-banners?populate=*`)
      ).json()

      const tags = await (
        await fetch(
          `${store.state.apiUrl}/tags?filters[name][$eq]=produtos-em-destaque&populate=*`
        )
      ).json()

      /* eslint-disable no-useless-escape */
      const taggedProducts = await (
        await fetch(
          `${store.state.apiUrl}/produtos?filters\[tags\][name][$eq]=produtos-em-destaque&populate=*`
        )
      ).json()
      /* eslint-disable no-useless-escape */

      // make the fetched data available in the page
      // also, return the .data property of the entities where
      // the data we need is stored
      return {
        fullbannerBanners: fullbannerBanners.data,
        brands: brands.data,
        iconBanners: iconBanners.data,
        mirroredBanners: mirroredBanners.data,
        tags: tags.data,
        taggedProducts: taggedProducts.data,
      }
    } catch (error) {
      // console.log(error)
    }
  },
}
</script>
