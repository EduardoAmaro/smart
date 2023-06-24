<template>
  <div class="section-topbanner">
    <div class="image-container">
      <img alt="Sobre Nós" src="@/assets/images/topbanner.jpg" />
      <div class="text">
        <h2 class="title">Sobre nós</h2>
        <span class="subtitle">
          Smart Abrasivos Industriais: soluções de alto desempenho para o seu
          negócio.
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-topbanner {
  .image-container {
    height: 300px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text {
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      color: $white-color;

      .title {
        font-size: $font-size-lg;
      }

      .subtitle {
        font-size: $font-size-ml;
        font-weight: 400;
      }
    }
  }
}
</style>
