<template>
  <a :href="social.link" target="_blank">
    <component :is="socialComponent" />
  </a>
</template>

<script>
import FacebookLogo from '~/assets/svg/facebook.svg?inline'
import InstagramLogo from '~/assets/svg/instagram.svg?inline'
import LinkedinLogo from '~/assets/svg/linkedin.svg?inline'
import YoutubeLogo from '~/assets/svg/youtube.svg?inline'

export default {
  props: {
    social: {
      type: Object,
      required: true,
    },
  },

  computed: {
    socialComponent() {
      if (this.social.name === 'facebook') return FacebookLogo
      if (this.social.name === 'instagram') return InstagramLogo
      if (this.social.name === 'linkedin') return LinkedinLogo
      return YoutubeLogo
    },
  },
}
</script>

<style lang="scss">
.social-logos {
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;

    svg {
      color: $white-color;
      transition: 0.3s;

      &:hover {
        color: $green-color;
      }
    }
  }
}
</style>
