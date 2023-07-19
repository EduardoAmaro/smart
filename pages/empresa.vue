<template>
  <main>
    <TopBanner :banner="banner" />
    <CompanyContent />
    <FullbannerFooter />
  </main>
</template>

<script>
import TopBanner from '~/components/common/TopBanner'
import CompanyContent from '~/components/empresa/CompanyContent'
import FullbannerFooter from '~/components/empresa/FullbannerFooter'

export default {
  components: {
    TopBanner,
    CompanyContent,
    FullbannerFooter,
  },

  async asyncData({ store }) {
    try {
      const banners = await (
        await fetch(`${store.state.apiUrl}/empresa-top-banners?&populate=*`)
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
