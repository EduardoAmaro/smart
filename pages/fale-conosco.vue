<template>
  <main>
    <TopBanner
      title="Fale conosco"
      subtitle="Smart Abrasivos Industriais: soluções de alto desempenho para o seu negócio."
    />
    <FormContent />
  </main>
</template>

<script>
import TopBanner from '~/components/empresa/TopBanner'
import FormContent from '~/components/fale-conosco/FormContent'

export default {
  components: {
    TopBanner,
    FormContent,
  },
}
</script>
