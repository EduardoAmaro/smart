<template>
  <div>
    <TopBar />
    <TheHeader />
    <Nuxt />
    <NewsletterBanner />
    <TheFooter />
  </div>
</template>

<script>
import TopBar from '~/components/layout/TopBar'
import TheHeader from '~/components/layout/TheHeader'
import NewsletterBanner from '~/components/layout/NewsletterBanner'
import TheFooter from '~/components/layout/TheFooter'

export default {
  components: {
    TopBar,
    TheHeader,
    NewsletterBanner,
    TheFooter,
  },
}
</script>
