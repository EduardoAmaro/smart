<template>
  <div class="section section-where-to-find">
    <div class="container-fluid">
      <div class="banner-wrapper">
        <div class="image-banner">
          <img alt="imagem" src="@/assets/images/wheretofind.jpg" />
        </div>
        <div class="text-banner">
          <h4 class="uppertitle">{{ content.bannerUppertitle }}</h4>
          <h3 class="title">{{ content.bannerTitle }}</h3>
          <a :href="`mailto:${contactData.email}`" target="_blank">
            <p>{{ contactData.email }}</p>
          </a>
          <a :href="`tel:${contactData.phone}`" target="_blank">
            <p>{{ contactData.phone }}</p>
          </a>
          <a :href="contactData.addressLink" target="_blank">
            <p>{{ contactData.address }}</p>
          </a>
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

  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  computed: {
    socialData() {
      return this.$store.state.socialData.data
    },
    contactData() {
      return this.$store.state.contactData.data.attributes
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

      a:hover {
        color: $green-color;
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
            color: $green-color;
          }
        }
      }
    }
  }
}
</style>
