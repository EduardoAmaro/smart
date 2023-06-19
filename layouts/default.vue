<template>
  <div>
    <TopBar />
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TopBar from '~/components/layout/TopBar'
import TheHeader from '~/components/layout/TheHeader'

export default {
  components: {
    TopBar,
    TheHeader,
  },
}
</script>
