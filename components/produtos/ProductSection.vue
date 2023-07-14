<template>
  <div class="section product-section">
    <div class="container-fluid">
      <div class="product-wrapper">
        <ImagesSliders :images="product.images.data" />
        <InfosSection :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ImagesSliders from '~/components/produtos/productSection/ImagesSliders'
import InfosSection from '~/components/produtos/productSection/InfosSection'

export default {
  components: {
    ImagesSliders,
    InfosSection,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.product-section {
  margin-bottom: 120px;

  .container-fluid {
    padding: 0 10%;

    .product-wrapper {
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>
