<template>
  <main>
    <TopBanner
      title="Sobre nós"
      subtitle="Smart Abrasivos Industriais: soluções de alto desempenho para o seu negócio."
    />
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
}
</script>
