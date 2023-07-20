<template>
  <main>
    <TopBanner :banner="banner" />
    <TencnicalContent :content="content" />
    <FormTecnical :content="content" />
  </main>
</template>

<script>
import TopBanner from '~/components/common/TopBanner'
import TencnicalContent from '~/components/apoio-tecnico/TencnicalContent'
import FormTecnical from '~/components/apoio-tecnico/FormTecnical'

export default {
  components: {
    TopBanner,
    TencnicalContent,
    FormTecnical,
  },

  async asyncData({ store }) {
    try {
      const banners = await (
        await fetch(
          `${store.state.apiUrl}/apoio-tecnico-top-banners?&populate=*`
        )
      ).json()

      const contents = await (
        await fetch(`${store.state.apiUrl}/apoio-tecnico-contents?&populate=*`)
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
