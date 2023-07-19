<template>
  <main>
    <TopBanner :banner="banner" />
    <TencnicalContent />
    <FormTecnical />
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

      return {
        banner: banners.data[0].attributes,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
