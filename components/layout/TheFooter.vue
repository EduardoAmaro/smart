<template>
  <footer class="section-footer">
    <div class="container-fluid">
      <div class="footer-wrapper">
        <div class="logo-container">
          <a href="/">
            <img alt="logo" src="@/assets/images/smart-white-logo.png" />
          </a>
        </div>
        <nav class="menu-desktop">
          <ul class="menu">
            <li class="item">
              <NuxtLink to="/empresa">Empresa</NuxtLink>
            </li>
            <li class="item">
              <NuxtLink to="/discos-de-corte">Produtos</NuxtLink>
            </li>
            <li class="item">
              <NuxtLink to="/apoio-tecnico">Apoio Técnico</NuxtLink>
            </li>
            <li class="item">
              <NuxtLink to="/fale-conosco">Fale Conosco</NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="contact-container">
          <span class="title">Contato</span>
          <p>comercial@smartabrasivos.com.br</p>
          <p>(54) 3013-3040</p>
          <p>
            R. Natal Chiarelo, 481 - Desvio Rizzo - Caxias do Sul - RS - Brasil,
            95012-663
          </p>
          <div class="social-logos">
            <SocialLogos
              v-for="social in socialData"
              :key="social.id"
              :social="social.attributes"
            />
          </div>
        </div>
        <div class="text-container">
          <h2 class="title">Baixe nosso catálogo</h2>
          <button class="main-button thicker">Clique aqui</button>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="cnpj">© SMART ABRASIVOS LTDA – CNPJ 99.999.999/9999-99</p>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLogos from '~/components/common/SocialLogos'

export default {
  components: {
    SocialLogos,
  },

  computed: {
    socialData() {
      return this.$store.state.socialData.data
    },
  },
}
</script>

<style lang="scss">
.section-footer {
  background-color: $medium-background;
  padding-top: 40px;
  color: $white-color;

  .footer-bottom {
    margin-top: 40px;
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    .cnpj {
      font-family: $font-family-title;
      font-size: $font-size-xs;
    }
  }

  .footer-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .logo-container {
      display: flex;
    }

    .menu-desktop {
      display: flex;

      .menu {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .item {
          display: flex;
          align-items: center;
          color: $white-color;

          a {
            white-space: nowrap;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: $font-size-ml;
            height: 100%;
            padding: 0 36px;
            display: flex;
            align-items: center;
          }

          &:hover {
            color: $orange-color;
          }
        }
      }
    }

    .contact-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 294px;

      .title {
        font-family: $font-family-title;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        font-size: $font-size-ml;
        height: 100%;
      }

      p {
        font-family: $font-family-title;
        font-weight: 700;
        $font-size-md: 1rem;
      }

      .social-logos {
        a,
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-size: $font-size-lm;
        margin-bottom: 30px;
      }

      .main-button {
        height: 42px;
        padding: 0 30px;

        &:hover {
          color: $orange-color;
        }
      }
    }
  }
}
</style>
