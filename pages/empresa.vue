<template>
  <main>
    <TopBanner />
    <CompanyContent />
    <FullbannerFooter />
  </main>
</template>

<script>
import TopBanner from '~/components/empresa/TopBanner'
import CompanyContent from '~/components/empresa/CompanyContent'
import FullbannerFooter from '~/components/empresa/FullbannerFooter'

export default {
  components: {
    TopBanner,
    CompanyContent,
    FullbannerFooter,
  },
}
</script>
