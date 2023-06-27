<template>
  <main>
    <TopBanner
      title="Fale conosco"
      subtitle="Smart Abrasivos Industriais: soluções de alto desempenho para o seu negócio."
    />
    <FormContent />
    <WhereToFindBanner />
  </main>
</template>

<script>
import TopBanner from '~/components/empresa/TopBanner'
import FormContent from '~/components/fale-conosco/FormContent'
import WhereToFindBanner from '~/components/fale-conosco/WhereToFindBanner'

export default {
  components: {
    TopBanner,
    FormContent,
    WhereToFindBanner,
  },
}
</script>
