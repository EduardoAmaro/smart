<template>
  <header class="section-header">
    <div class="container-fluid">
      <div class="header-wrapper">
        <div class="logo-container">
          <NuxtLink to="/">
            <SmartLogo />
          </NuxtLink>
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
  background-color: $medium-background;
  .header-wrapper {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    .logo-container {
      display: flex;
      flex: 1;
    }

    .menu-desktop {
      flex: 4;
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
      flex: 1;
      justify-content: flex-end;

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
