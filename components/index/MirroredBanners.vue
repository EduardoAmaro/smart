<template>
  <div class="section section-mirrored">
    <div class="container-fluid">
      <div class="banners-container">
        <div v-for="index in 3" :key="index" class="banner-mirrored">
          <div class="image-container">
            <img alt="imagem" src="@/assets/images/mirrored-banner.png" />
          </div>
          <div class="text-container">
            <h4 class="uppertitle">Título superior</h4>
            <h3 class="title">Título da seção</h3>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a
              dapibus felis, eu vulputate lectus. Integer pellentesque malesuada
              tellus, id hendrerit tortor pulvinar eu.
            </p>
            <div class="button-container">
              <button class="main-button thicker">Call to action</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.section-mirrored {
  margin-top: 120px;
  margin-bottom: 120px;

  .banners-container {
    display: flex;
    flex-direction: column;
    gap: 60px;

    .banner-mirrored {
      display: flex;

      &:nth-child(2n) {
        flex-direction: row-reverse;
        .text-container {
          padding-left: 0;
          padding-right: 5%;
        }
      }

      .image-container {
        width: 50%;
        display: flex;

        img {
          width: 100%;
        }
      }

      .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;
        width: 50%;

        .uppertitle {
          text-transform: uppercase;
          font-size: $font-size-md;
        }

        .title {
          font-size: $font-size-lg;
          margin-bottom: 15px;
        }

        .description {
          font-size: $font-size-ml;
          margin-bottom: 15px;
        }

        .main-button {
          height: 42px;
          padding: 0 30px;
        }
      }
    }
  }
}
</style>
