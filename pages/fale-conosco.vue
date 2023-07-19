<template>
  <main>
    <TopBanner :banner="banner" />
    <FormContent />
    <WhereToFindBanner />
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

      return {
        banner: banners.data[0].attributes,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
