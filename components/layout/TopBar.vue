<template>
  <div class="section-topbar">
    <div class="container-fluid">
      <div class="topbar-wrapper">
        <SocialLogos />
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
import SocialLogos from '~/components/layout/SocialLogos'

export default {
  components: {
    SocialLogos,
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
