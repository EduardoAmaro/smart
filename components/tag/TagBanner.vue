<template>
  <div class="section-tagbanner">
    <div class="container-fluid">
      <div class="text-container">
        <h2 class="title">{{ tag.title }}</h2>
      </div>
      <div class="image-container">
        <img alt="" src="@/assets/images/rhodius.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.section-tagbanner {
  background-color: $light-background;
  height: 200px;

  .container-fluid {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-container {
    .title {
      font-size: $font-size-xl;
    }

    .subtitle {
      font-size: $font-size-ml;
      font-weight: 400;
    }
  }

  .image-container {
    img {
      width: 159px;
    }
  }
}
</style>
