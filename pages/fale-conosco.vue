<template>
  <main>
    <TopBanner :banner="banner" />
    <FormContent :content="content" />
    <WhereToFindBanner :content="content" />
  </main>
</template>

<script>
import TopBanner from '~/components/common/TopBanner'
import FormContent from '~/components/fale-conosco/FormContent'
import WhereToFindBanner from '~/components/fale-conosco/WhereToFindBanner'

export default {
  components: {
    TopBanner,
    FormContent,
    WhereToFindBanner,
  },

  async asyncData({ store }) {
    try {
      const banners = await (
        await fetch(
          `${store.state.apiUrl}/fale-conosco-top-banners?&populate=*`
        )
      ).json()

      const contents = await (
        await fetch(`${store.state.apiUrl}/fale-conosco-contents?&populate=*`)
      ).json()

      return {
        banner: banners.data[0].attributes,
        content: contents.data[0].attributes,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
