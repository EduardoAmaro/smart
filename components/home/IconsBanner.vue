<template>
  <div class="section section-icons">
    <div class="container-fluid">
      <div class="icons-wrapper">
        <div class="icon-container">
          <div class="icon">
            <BoxIcon />
          </div>
          <div class="text">
            <h2 class="title">Frete Grátis</h2>
            <span class="subtitle">Frete grátis acima de R$ 299,00</span>
          </div>
        </div>
        <div class="icon-container">
          <div class="icon">
            <BoxIcon />
          </div>
          <div class="text">
            <h2 class="title">Frete Grátis</h2>
            <span class="subtitle">Frete grátis acima de R$ 299,00</span>
          </div>
        </div>
        <div class="icon-container">
          <div class="icon">
            <BoxIcon />
          </div>
          <div class="text">
            <h2 class="title">Frete Grátis</h2>
            <span class="subtitle">Frete grátis acima de R$ 299,00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoxIcon from '~/assets/svg/box.svg?inline'

export default {
  components: {
    BoxIcon,
  },
}
</script>

<style lang="scss">
.section-icons {
  .icons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    background-color: $ligth-background;
    padding: 30px 0;

    .icon-container {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon {
        width: 50px;
        height: 50px;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          color: $dark-orange-color;
          text-transform: uppercase;
          font-size: $font-size-md;
          font-weight: 700;
        }

        .subtitle {
          font-family: $font-family-title;
          font-size: $font-size-xs;
          font-weight: 700;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
