<template>
  <div class="text-wrapper">
    <h3 class="uppertitle" :style="'color: ' + product.color">
      {{ product.brand }}
    </h3>
    <h1 class="title">{{ product.name }}</h1>
    <div class="description" v-html="$md.render(product.description)"></div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.infos-wrapper {
  width: 50%;
  padding-left: 6%;

  .text-wrapper {
    .uppertitle {
      text-transform: uppercase;
      font-size: $font-size-md;
      color: $dark-orange-color;
      font-weight: 700;
    }

    .title {
      font-size: $font-size-lm;
      margin-bottom: 30px;
    }

    .description {
      font-size: $font-size-ml;
      line-height: 120%;

      p {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
