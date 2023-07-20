<template>
  <div class="section section-tecnical-content">
    <div class="container-fluid">
      <div class="text-wrapper">
        <h2 class="title">{{ content.title }}</h2>
        <div class="subtitle" v-html="$md.render(content.text)"></div>
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
  },
}
</script>

<style lang="scss">
.section-tecnical-content {
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
}
</style>
