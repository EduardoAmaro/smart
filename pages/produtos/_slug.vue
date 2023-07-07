<template>
  <main>
    <ProductSection />
    <ProductsSlider title="Produtos relacionados" :tag="tag" />
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

  data() {
    return {
      tag: {
        name: 'discos-de-corte',
      },
    }
  },
}
</script>

<style></style>
