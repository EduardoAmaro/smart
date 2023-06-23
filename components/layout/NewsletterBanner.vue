<template>
  <div class="section section-newsletter">
    <div class="container-fluid">
      <div class="newsletter-wrapper">
        <div class="text">
          <h2 class="title">
            <strong>Cadastre-se</strong> e <br />
            receba todas as <strong>novidades!</strong>
          </h2>
        </div>
        <div class="input-container">
          <form class="form-newsletter">
            <div class="field">
              <label for="name">Nome</label>
              <input
                v-model="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div class="field">
              <label for="company">Empresa</label>
              <input
                v-model="company"
                name="company"
                type="text"
                placeholder="Digite sua empresa"
              />
            </div>
            <div class="field">
              <label for="email">E-mail</label>
              <input
                v-model="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <button class="main-button thicker" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      company: '',
      email: '',
      errorMessage: '',
    }
  },
}
</script>

<style lang="scss">
.section-newsletter {
  background-color: $light-background;
  padding: 35px 0;

  .newsletter-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 3%;

    .text {
      .title {
        font-size: $font-size-lm;
      }
    }

    .input-container {
      .form-newsletter {
        display: flex;
        align-items: flex-end;
        gap: 15px;
      }

      .main-button {
        color: $dark-orange-color;

        &:hover {
          color: $text-color;
        }
      }
    }
  }
}
</style>
