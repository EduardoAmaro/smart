<template>
  <div class="swiper-slide">
    <div class="product-block">
      <a href="/produtos/1">
        <div class="images-wrapper">
          <img alt="imagem" src="@/assets/images/product-block.png" />
        </div>
        <div class="text-wrapper">
          <h3 class="title">Disco de Corte Alpha Line</h3>
          <h4 class="subtitle">Rhodius</h4>
          <p class="description">
            Discos de corte de menor custo. Para máquinas de baixa potência.
            Disponível entre 30mm e 600mm de diâmetro.
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.swiper-slide {
  .product-block {
    border: 2px solid $light-background;
    padding: 10px;

    .images-wrapper {
      img {
        width: 100%;
      }
    }

    .text-wrapper {
      text-align: center;
      padding-top: 15px;

      .title {
        font-size: $font-size-ml;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .subtitle {
        text-transform: uppercase;
        margin: 0 0 5px;
        color: $dark-orange-color;
        font-size: $font-size-me;
      }

      .description {
        margin: 0;
        font-size: $font-size-xs;
        line-height: $line-height-xs;
      }
    }
  }
}
</style>
