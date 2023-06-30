<template>
  <div class="section products-list">
    <div class="container-fluid">
      <div class="list-wrapper">
        <ProductBlock v-for="index in 12" :key="index" />
      </div>
    </div>
    <div class="text-container">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import ProductBlock from '~/components/common/ProductBlock.vue'

export default {
  components: {
    ProductBlock,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.products-list {
  .container-fluid {
    padding: 0 10%;

    .list-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 24px;
    }
  }

  .text-container {
    padding: 0 5%;
    margin: 120px 0;

    .title {
      font-size: $font-size-lg;
      margin-bottom: 15px;
    }

    .description {
      font-size: $font-size-ml;
      line-height: 140%;
    }
  }
}
</style>
