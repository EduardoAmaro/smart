<template>
  <main v-if="product">
    <ProductSection :product="product" />
    <ProductsSlider
      v-for="tag in relatedTags"
      :key="tag.id"
      :tag="tag.attributes"
      :products="relatedProducts(tag.attributes.name)"
    />
  </main>
  <main v-else class="section container-fluid">
    <h1 class="title">Produto não encontrado</h1>
  </main>
</template>

<script>
import ProductSection from '~/components/produtos/ProductSection'
import ProductsSlider from '~/components/common/ProductsSlider'

export default {
  components: {
    ProductSection,
    ProductsSlider,
  },

  async asyncData({ params, store }) {
    try {
      const products = await (
        await fetch(`${store.state.apiUrl}/produtos?&populate=*`)
      ).json()

      const product = products.data.find(
        (product) => product.attributes.slug === params.slug
      ).attributes

      const relatedTags = product.tags.data.filter(
        (tag) => tag.attributes.type === 'produtos-relacionados'
      )

      return {
        products: products.data,
        product,
        relatedTags,
      }
    } catch (error) {
      console.log(error)
    }
  },

  methods: {
    relatedProducts(tagName) {
      return this.products.filter((product) =>
        product.attributes.tags.data.find(
          (tag) => tag.attributes.name === tagName
        )
      )
    },
  },
}
</script>

<style></style>
