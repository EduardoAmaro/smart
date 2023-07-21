<template>
  <div class="section section-form">
    <div class="container-fluid">
      <div class="form-wrapper">
        <div class="text">
          <h2 class="title">{{ content.title }}</h2>
          <span class="subtitle">
            {{ content.text }}
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
            <div class="field">
              <label for="subject">Assunto</label>
              <input
                id="subject"
                v-model="subject"
                name="subject"
                type="text"
                placeholder="Selecione o assunto"
                class="darker"
                required
              />
            </div>
            <div class="field message-field">
              <label for="message">Mensagem</label>
              <textarea
                id="message"
                v-model="message"
                name="message"
                type="text-area"
                placeholder="Digite sua mensagem"
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
      city: '',
      state: '',
      subject: '',
      message: '',
    }
  },
}
</script>

<style lang="scss">
.section-form {
  margin-top: 120px;

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
          color: $dark-green-color;
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
