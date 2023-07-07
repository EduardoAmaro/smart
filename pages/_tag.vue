<template>
  <main>
    <TagBanner :tag="tags[0].attributes" />
    <ProductsList :products="taggedProducts" :tag="tags[0].attributes" />
  </main>
</template>

<script>
import TagBanner from '~/components/tag/TagBanner'
import ProductsList from '~/components/tag/ProductsList'

export default {
  components: {
    TagBanner,
    ProductsList,
  },

  async asyncData({ params, store }) {
    try {
      const tags = await (
        await fetch(
          `${store.state.apiUrl}/tags?filters[name][$eq]=${params.tag}&populate=*`
        )
      ).json()

      /* eslint-disable no-useless-escape */
      const taggedProducts = await (
        await fetch(
          `${store.state.apiUrl}/produtos?filters\[tags\][name][$eq]=${params.tag}&populate=*`
        )
      ).json()
      /* eslint-disable no-useless-escape */

      return {
        tags: tags.data,
        taggedProducts: taggedProducts.data,
      }
    } catch (error) {
      // console.log(error)
    }
  },
}
</script>

<style></style>
