<template>
  <div class="section-topbar">
    <div class="container-fluid">
      <div class="topbar-wrapper">
        <div class="social-logos">
          <a href="https://www.instagram.com/smartabrasivos/" target="_blank">
            <FacebookLogo />
          </a>
          <a href="https://www.instagram.com/smartabrasivos/" target="_blank">
            <InstagramLogo />
          </a>
          <a
            href="https://www.linkedin.com/company/smart-abrasivos/"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
          <a
            href="https://www.linkedin.com/company/smart-abrasivos/"
            target="_blank"
          >
            <YoutubeLogo />
          </a>
        </div>
        <div class="social-email">
          <a
            class="email"
            href="mailto:comercial@smartabrasivos.com.br?subject=Assunto do email&cc=comercial@smartabrasivos.com.br&body=Conteúdo do email que será preenchido automaticamente"
          >
            <span>comercial@smartabrasivos.com.br</span>
          </a>
        </div>
        <div class="social-fone">
          <a class="fone" href="tel:5430133040">
            <span>(54) 3013-3040</span>
          </a>
        </div>
      </div>
    </div>
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
.section-topbar {
  background-color: $dark-background;
  padding: 8px 0;
  width: 100%;
  font-family: $font-family-title;

  .topbar-wrapper {
    display: flex;
    justify-content: space-between;

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

    .social-email {
      display: flex;
      justify-content: center;
      flex: 1;
      align-items: center;
    }

    .social-email,
    .social-fone {
      a {
        color: $white-color;
        display: flex;
        transition: 0.3s;

        span {
          line-height: $line-height-xs;
          font-size: $font-size-xs;
          font-weight: 700;
        }

        &:hover {
          color: $orange-color;
        }
      }
    }
  }
}
</style>
