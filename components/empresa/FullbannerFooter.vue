<template>
  <div class="section section-fullbanner">
    <div class="image-container">
      <img alt="Sobre Nós" src="@/assets/images/fullbannersobrenos.jpg" />
      <div class="text">
        <h2 class="title">Smart Abrasivos Industriais</h2>
        <span class="subtitle"
          >Conheça nossas soluções. Solicite nosso contato.</span
        >
        <button class="main-button thicker">Fale Conosco</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-fullbanner {
  margin-top: 120px;
  margin-bottom: -60px;

  .image-container {
    height: 500px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }

    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: $dark-orange-color;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-size: $font-size-lg;
        margin-bottom: 12px;
      }

      .subtitle {
        font-size: $font-size-md;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      .main-button {
        height: 50px;
        font-size: 18px;
        padding: 0 26px;

        &:hover {
          color: $text-color;
        }
      }
    }
  }
}
</style>
