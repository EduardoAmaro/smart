<template>
  <div class="section-topbanner">
    <div class="image-container">
      <img :alt="title" src="@/assets/images/topbanner.jpg" />
      <div class="text">
        <h2 class="title">{{ title }}</h2>
        <span class="subtitle">{{ subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
}
</script>

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
