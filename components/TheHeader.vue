<template>
  <header class="section-header">
    <div class="container-fluid">
      <div class="header-wrapper">
        <div class="logo-container">
          <a href="/">
            <SmartLogo />
          </a>
        </div>
        <nav class="menu-desktop">
          <ul class="menu">
            <li class="item">
              <a href="/empresa"> Empresa </a>
            </li>
            <li class="item">
              <a href="/"> Produtos </a>
            </li>
            <li class="item">
              <a href="/"> Apoio Técnico </a>
            </li>
            <li class="item">
              <a href="/"> Fale Conosco </a>
            </li>
          </ul>
        </nav>
        <div class="button-container">
          <button class="main-button">Baixe o catálogo</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SmartLogo from '~/assets/svg/smartlogo.svg?inline'

export default {
  components: {
    SmartLogo,
  },
}
</script>

<style lang="scss">
.section-header {
  background-color: $light-background;
  .header-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    .menu-desktop {
      flex: 1;
      display: flex;
      justify-content: center;

      .menu {
        display: flex;

        .item {
          display: flex;
          align-items: center;
          color: $white-color;

          a {
            white-space: nowrap;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            font-size: $font-size-md;
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

    .button-container {
      display: flex;
      align-items: center;

      button {
        color: $white-color;

        &:hover {
          color: $orange-color;
        }
      }
    }
  }
}
</style>
