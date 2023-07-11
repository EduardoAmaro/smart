<template>
  <div>
    <TopBar :contact="contactData" :socials="socialData" />
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
    return this.$axios
      .get(`${this.$store.state.apiUrl}/contact?populate=*`)
      .then((response) => {
        this.$store.commit('setContactData', response.data)

        // Fetch social data after contact data is fetched
        return this.$axios.get(`${this.$store.state.apiUrl}/socials?populate=*`)
      })
      .then((response) => {
        this.$store.commit('setSocialData', response.data)
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error)
      })
  },

  computed: {
    contactData() {
      return this.$store.state.contactData.data.attributes
    },
    socialData() {
      return this.$store.state.socialData.data
    },
  },
}
</script>
