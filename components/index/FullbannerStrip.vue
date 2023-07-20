<template>
  <div class="section-strip">
    <div class="container-fluid">
      <div class="strip-wrapper">
        <div class="text-container">
          <span>{{ strip.text }}</span>
        </div>
        <div class="button-container">
          <NuxtLink :to="strip.buttonLink">
            <button class="main-button thicker">{{ strip.buttonText }}</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strip: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.section-strip {
  background-color: $light-background;
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
      }
    }
  }
}
</style>
