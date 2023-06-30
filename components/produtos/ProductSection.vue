<template>
  <div class="section product-section">
    <div class="container-fluid">
      <div class="product-wrapper">
        <ImagesSliders />
        <InfosSection />
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
}
</script>

<style lang="scss">
.product-section {
  .container-fluid {
    padding: 0 10%;

    .product-wrapper {
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>
