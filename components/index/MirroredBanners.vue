<template>
  <div class="section section-mirrored">
    <div class="container-fluid">
      <div class="banners-container">
        <div v-for="banner in banners" :key="banner.id" class="banner-mirrored">
          <div class="image-container">
            <img
              v-if="coverImageUrl(banner)"
              :src="coverImageUrl(banner)"
              :alt="coverImageAlt(banner)"
            />
          </div>
          <div class="text-container">
            <h4 class="uppertitle">{{ banner.attributes.uppertitle }}</h4>
            <h3 class="title">{{ banner.attributes.title }}</h3>
            <p class="description">
              {{ banner.attributes.description }}
            </p>
            <div class="button-container">
              <a :href="banner.attributes.buttonLink" target="_blank">
                <button class="main-button thicker">
                  {{ banner.attributes.buttonText }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },

  methods: {
    coverImageUrl(banner) {
      const url = this.$store.state.url
      const imagePath = banner.attributes.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(banner) {
      const alt = banner.attributes.image.data.attributes.alternativeText
      return alt || 'Mirrored Banner'
    },
  },
}
</script>

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
