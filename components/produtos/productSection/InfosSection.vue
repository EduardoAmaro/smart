<template>
  <div class="infos-wrapper">
    <TextInfos :product="product" />
    <FormInfos />
  </div>
</template>

<script>
import TextInfos from '~/components/produtos/productSection/infos/TextInfos'
import FormInfos from '~/components/produtos/productSection/infos/FormInfos'

export default {
  components: {
    TextInfos,
    FormInfos,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss"></style>
