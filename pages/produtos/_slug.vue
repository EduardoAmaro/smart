<template>
  <main>
    <ProductSection :product="product[0].attributes" />
    <!-- <ProductsSlider title="Produtos relacionados" :tag="tag" /> -->
  </main>
</template>

<script>
import ProductSection from '~/components/produtos/ProductSection'
/* import ProductsSlider from '~/components/common/ProductsSlider' */

export default {
  components: {
    ProductSection,
    /* ProductsSlider, */
  },

  async asyncData({ params, store }) {
    try {
      const product = await (
        await fetch(
          `${store.state.apiUrl}/produtos?filters[slug][$eq]=${params.slug}&populate=*`
        )
      ).json()
      return {
        product: product.data,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style></style>
