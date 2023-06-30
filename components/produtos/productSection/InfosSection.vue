<template>
  <div class="infos-wrapper">
    <div class="text-wrapper">
      <h4 class="uppertitle">Rhodius</h4>
      <h3 class="title">
        DISCO DE CORTE 180 MM X 2,5 MM X 22,23 MM Alpha line
      </h3>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
        dapibus felis, eu vulputate lectus. Integer pellentesque malesuada
        tellus, id hendrerit tortor pulvinar eu.
      </p>
      <p class="description">Discos de corte de menor custo.</p>
      <p class="description">Para máquinas de baixa potência.</p>
      <p class="description">Disponível entre 30mm e 600mm de diâmetro.</p>
    </div>
  </div>
</template>

<style lang="scss">
.infos-wrapper {
  width: 50%;
  padding-left: 6%;

  .text-wrapper {
    .uppertitle {
      text-transform: uppercase;
      font-size: $font-size-md;
      color: $dark-orange-color;
      font-weight: 700;
    }

    .title {
      font-size: $font-size-lm;
      margin-bottom: 30px;
    }

    .description {
      font-size: $font-size-ml;
      line-height: 120%;
      margin-bottom: 15px;
    }
  }
}
</style>
