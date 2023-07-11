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

  fetch() {
    return (
      this.$axios
        .get(`${this.$store.state.apiUrl}/contact?populate=*`)
        .then((response) => {
          this.$store.commit('setContactData', response.data)
        })
        /* eslint-disable no-console */
        .catch((error) => {
          console.error('Failed to fetch layout data:', error)
        })
    )
    /* eslint-disable no-console */
  },

  computed: {
    contactData() {
      return this.$store.state.contactData
    },
  },
}
</script>
