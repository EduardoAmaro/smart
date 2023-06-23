<template>
  <div>
    <TopBar />
    <TheHeader />
    <Nuxt />
    <NewsletterBanner />
  </div>
</template>

<script>
import TopBar from '~/components/layout/TopBar'
import TheHeader from '~/components/layout/TheHeader'
import NewsletterBanner from '~/components/layout/NewsletterBanner'

export default {
  components: {
    TopBar,
    TheHeader,
    NewsletterBanner,
  },
}
</script>
