<template>
  <main>
    <TopBanner :banner="banner" />
    <CompanyContent :content="content" :content-banner="contentBanner" />
    <FullbannerFooter :fullbanner="fullbanner" />
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

      const contents = await (
        await fetch(`${store.state.apiUrl}/empresa-contents?&populate=*`)
      ).json()

      const contentBanners = await (
        await fetch(`${store.state.apiUrl}/empresa-banners?&populate=*`)
      ).json()

      const fullbanners = await (
        await fetch(`${store.state.apiUrl}/empresa-fullbanners?&populate=*`)
      ).json()

      return {
        banner: banners.data[0].attributes,
        content: contents.data[0].attributes,
        contentBanner: contentBanners.data[0].attributes,
        fullbanner: fullbanners.data[0].attributes,
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
