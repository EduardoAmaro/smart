<template>
  <div class="section section-tecnical">
    <div class="container-fluid">
      <div class="form-wrapper">
        <div class="text">
          <h2 class="title">{{ content.formTitle }}</h2>
          <span class="subtitle">
            {{ content.formText }}
          </span>
        </div>
        <div class="form-container">
          <!-- todo -->
          <form class="form-contato">
            <div class="field">
              <label for="name">Nome</label>
              <input
                id="name"
                v-model="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                class="darker"
                required
              />
            </div>
            <div class="field">
              <label for="email">E-mail</label>
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                class="darker"
                required
              />
            </div>
            <div class="field">
              <label for="phone">Telefone</label>
              <input
                id="phone"
                v-model="phone"
                name="phone"
                type="tel"
                placeholder="Digite seu telefone"
                class="darker"
                required
              />
            </div>
            <div class="field">
              <label for="company">Empresa</label>
              <input
                id="company"
                v-model="company"
                name="company"
                type="text"
                placeholder="Digite sua empresa"
                class="darker"
                required
              />
            </div>
            <div class="field">
              <label for="city">Cidade</label>
              <input
                id="city"
                v-model="city"
                name="city"
                type="text"
                placeholder="Digite sua cidade"
                class="darker"
                required
              />
            </div>
            <div class="field">
              <label for="state">Estado</label>
              <input
                id="state"
                v-model="state"
                name="state"
                type="text"
                placeholder="Digite seu estado"
                class="darker"
                required
              />
            </div>
            <div class="field message-field">
              <label for="notes">Observações</label>
              <textarea
                id="notes"
                v-model="notes"
                name="notes"
                type="text-area"
                placeholder="Digite as observações"
                class="darker"
                required
              ></textarea>
            </div>
            <button class="main-button thicker" type="submit">Enviar</button>
          </form>
        </div>
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

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      company: '',
      city: '',
      state: '',
      notes: '',
    }
  },
}
</script>

<style lang="scss">
.section-tecnical {
  margin-top: 120px;
  margin-bottom: 240px;

  .container-fluid {
    padding: 0 25%;
  }

  .form-wrapper {
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-size: $font-size-lg;
        text-align: center;
        margin-bottom: 12px;
      }

      .subtitle {
        font-size: $font-size-ml;
        line-height: 160%;
        text-align: center;
      }
    }

    .form-container {
      margin-top: 60px;

      .form-contato {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;

        .field {
          width: calc(50% - 10px);

          &.message-field {
            width: 100%;
          }
        }

        .main-button {
          margin-left: auto;
          color: $dark-orange-color;
          height: 50px;
          font-size: $font-size-ml;
          padding: 0 50px;

          &:hover {
            color: $text-color;
          }
        }
      }
    }
  }
}
</style>
