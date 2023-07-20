<template>
  <div>
    <TopBar :contact="contactData" :socials="socialData" />
    <TheHeader :catalog="catalogData" />
    <Nuxt />
    <NewsletterBanner />
    <TheFooter
      :contact="contactData"
      :socials="socialData"
      :menus="footerMenusData"
      :catalog="catalogData"
    />
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
        // contact data
        .get(`${this.$store.state.apiUrl}/contact?populate=*`)
        .then((response) => {
          this.$store.commit('setContactData', response.data)

          // social data
          return this.$axios.get(
            `${this.$store.state.apiUrl}/socials?populate=*`
          )
        })
        .then((response) => {
          this.$store.commit('setSocialData', response.data)

          // footer menu data
          return this.$axios.get(
            `${this.$store.state.apiUrl}/footer-menus?populate=*`
          )
        })
        .then((response) => {
          this.$store.commit('setFooterMenusData', response.data)

          // catalog data
          return this.$axios.get(
            `${this.$store.state.apiUrl}/catalog?populate=*`
          )
        })
        .then((response) => {
          this.$store.commit('setCatalogData', response.data)
        })
        .catch((error) => {
          console.error('Failed to fetch data:', error)
        })
    )
  },

  computed: {
    contactData() {
      return this.$store.state.contactData.data.attributes
    },
    socialData() {
      return this.$store.state.socialData.data
    },
    footerMenusData() {
      return this.$store.state.footerMenusData.data
    },
    catalogData() {
      return this.$store.state.catalogData.data.attributes
    },
  },
}
</script>
