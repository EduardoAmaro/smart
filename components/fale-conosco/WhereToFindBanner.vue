<template>
  <div class="section section-where-to-find">
    <div class="container-fluid">
      <div class="banner-wrapper">
        <div class="image-banner">
          <img alt="imagem" src="@/assets/images/wheretofind.jpg" />
        </div>
        <div class="text-banner">
          <h4 class="uppertitle">Título superior</h4>
          <h3 class="title">Onde nos encontrar</h3>
          <p>comercial@smartabrasivos.com.br</p>
          <p>(54) 3013-3040</p>
          <p>
            R. Natal Chiarelo, 481 - Desvio Rizzo - Caxias do Sul - RS - Brasil,
            95012-663
          </p>
          <div class="social-logos">
            <SocialLogos
              v-for="social in socialData"
              :key="social.id"
              :social="social.attributes"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLogos from '~/components/common/SocialLogos'

export default {
  components: {
    SocialLogos,
  },

  computed: {
    socialData() {
      return this.$store.state.socialData.data
    },
  },
}
</script>

<style lang="scss">
.section-where-to-find {
  margin-top: 120px;
  margin-bottom: 240px;

  .container-fluid {
    padding: 0 25%;
  }

  .banner-wrapper {
    display: flex;

    .image-banner {
      display: flex;
      width: 50%;

      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1;
      }
    }

    .text-banner {
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
        margin-bottom: 27px;
      }

      p {
        font-family: $font-family-title;
        $font-size-md: 1rem;
        margin-bottom: 20px;
        max-width: 297px;
      }

      .social-logos {
        a,
        svg {
          color: $text-color;
          opacity: 1;
          width: 30px;
          height: 30px;
          &:hover {
            color: $orange-color;
          }
        }
      }
    }
  }
}
</style>
