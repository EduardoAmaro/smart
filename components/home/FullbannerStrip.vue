<template>
  <div class="section-strip">
    <div class="container-fluid">
      <div class="strip-wrapper">
        <div class="text-container">
          <span>conheça nossas soluções. solicite nosso contato.</span>
        </div>
        <div class="button-container">
          <button class="main-button thicker">Fale conosco</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-strip {
  background-color: $ligth-background;
  padding: 6px 0;
  font-family: $font-family-title;

  .strip-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5%;

    .text-container {
      text-transform: uppercase;
      font-weight: 500;
      font-size: $font-size-me;
      letter-spacing: 0.04em;
    }

    .button-container {
      .main-button {
        height: 32px;
        font-size: $font-size-xs;

        &:hover {
          color: $dark-orange-color;
        }
      }
    }
  }
}
</style>
