<template>
  <div class="section section-content">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="text-wrapper">
          <h2 class="title">{{ content.title }}</h2>
          <div class="subtitle" v-html="$md.render(content.text)"></div>
        </div>
        <div class="banner-wrapper">
          <div class="image-banner">
            <img
              v-if="coverImageUrl(contentBanner)"
              :src="coverImageUrl(contentBanner)"
              :alt="coverImageAlt(contentBanner)"
            />
          </div>
          <div class="text-banner">
            <h4 class="uppertitle">{{ contentBanner.uppertitle }}</h4>
            <h3 class="title">{{ contentBanner.title }}</h3>
            <p class="description">
              {{ contentBanner.description }}
            </p>
          </div>
        </div>
        <div class="text-wrapper">
          <div class="subtitle" v-html="$md.render(content.inferiorText)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    contentBanner: {
      type: Object,
      required: true,
    },
  },

  methods: {
    coverImageUrl(banner) {
      const url = this.$store.state.url
      const imagePath = banner.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(banner) {
      const alt = banner.image.data.attributes.alternativeText
      return alt || 'Top Banner Image'
    },
  },
}
</script>

<style lang="scss">
.section-content {
  margin-top: 120px;

  .container-fluid {
    padding: 0 25%;
  }

  .text-wrapper {
    .title {
      font-size: $font-size-lg;
      text-align: center;
      margin-bottom: 30px;
    }

    .subtitle {
      font-size: $font-size-ml;
      line-height: 160%;

      p {
        margin-bottom: 20px;
        text-align: justify;
      }
    }
  }

  .banner-wrapper {
    display: flex;
    margin-top: 120px;
    margin-bottom: 120px;

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
        margin-bottom: 15px;
      }

      .description {
        font-size: $font-size-ml;
        line-height: 160%;
        margin-bottom: 15px;
        text-align: justify;
      }

      .main-button {
        height: 42px;
        padding: 0 30px;
      }
    }
  }
}
</style>
