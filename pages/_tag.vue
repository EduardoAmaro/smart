<template>
  <main v-if="tags[0]">
    <TagBanner :tag="tags[0].attributes" />
    <ProductsList :products="taggedProducts" :tag="tags[0].attributes" />
  </main>
  <main v-else class="section container-fluid">
    <h1 class="title">Página não encontrada</h1>
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
      console.log(error)
    }
  },
}
</script>

<style></style>
