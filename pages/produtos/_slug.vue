<template>
  <main>
    <ProductSection />
    <ProductsSlider title="Produtos relacionados" />
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
}
</script>

<style></style>
