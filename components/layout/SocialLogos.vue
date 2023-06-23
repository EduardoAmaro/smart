<template>
  <div class="social-logos">
    <a href="https://www.instagram.com/smartabrasivos/" target="_blank">
      <FacebookLogo />
    </a>
    <a href="https://www.instagram.com/smartabrasivos/" target="_blank">
      <InstagramLogo />
    </a>
    <a href="https://www.linkedin.com/company/smart-abrasivos/" target="_blank">
      <LinkedinLogo />
    </a>
    <a href="https://www.linkedin.com/company/smart-abrasivos/" target="_blank">
      <YoutubeLogo />
    </a>
  </div>
</template>

<script>
import FacebookLogo from '~/assets/svg/facebook.svg?inline'
import InstagramLogo from '~/assets/svg/instagram.svg?inline'
import LinkedinLogo from '~/assets/svg/linkedin.svg?inline'
import YoutubeLogo from '~/assets/svg/youtube.svg?inline'

export default {
  components: {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    YoutubeLogo,
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
        color: $orange-color;
      }
    }
  }
}
</style>
