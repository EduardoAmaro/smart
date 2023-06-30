<template>
  <div class="form-wrapper">
    <h3 class="title">Solicite seu orçamento aqui</h3>
    <div class="form-container">
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
        <div class="field quantity-field">
          <label for="subject">Quantidade</label>
          <input
            id="quantity"
            v-model="quantity"
            name="quantity"
            type="text"
            placeholder="1"
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
        <button class="main-button thicker whatsapp" type="submit">
          enviar orçamento por whatsapp
          <WhatsappLogo />
        </button>
        <button class="main-button thicker email" type="submit">
          enviar orçamento por e-mail
          <EmailLogo />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import WhatsappLogo from '~/assets/svg/whatsapp.svg?inline'
import EmailLogo from '~/assets/svg/email.svg?inline'

export default {
  components: {
    WhatsappLogo,
    EmailLogo,
  },

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      quantity: '',
      notes: '',
    }
  },
}
</script>

<style lang="scss">
.form-wrapper {
  margin-top: 45px;

  .title {
    font-size: $font-size-ml;
    line-height: 140%;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .form-container {
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

        &.quantity-field {
          input {
            text-align: center;
          }
        }
      }

      .main-button {
        width: calc(50% - 10px);
        color: $text-color;
        height: 42px;
        font-size: $font-size-me;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;

        &.whatsapp {
          &:hover {
            color: $green-color;
          }
        }

        &.email {
          &:hover {
            color: $dark-orange-color;
          }
        }

        svg {
          margin-top: -2px;
        }
      }
    }
  }
}
</style>
