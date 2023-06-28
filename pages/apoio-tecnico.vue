<template>
  <main>
    <TopBanner
      title="Apoio técnico"
      subtitle="Smart Abrasivos Industriais: soluções de alto desempenho para o seu negócio."
    />
    <TencnicalContent />
    <FormTecnical />
  </main>
</template>

<script>
import TopBanner from '~/components/common/TopBanner'
import TencnicalContent from '~/components/apoio-tecnico/TencnicalContent'
import FormTecnical from '~/components/apoio-tecnico/FormTecnical'

export default {
  components: {
    TopBanner,
    TencnicalContent,
    FormTecnical,
  },
}
</script>
