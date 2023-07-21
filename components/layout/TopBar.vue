<template>
  <div class="section-topbar">
    <div class="container-fluid">
      <div class="topbar-wrapper">
        <div class="social-logos">
          <SocialLogos
            v-for="social in socials"
            :key="social.id"
            :social="social.attributes"
          />
        </div>
        <div class="social-email">
          <a class="email" :href="`mailto:${contact.email}`">
            <span>{{ contact.email }}</span>
          </a>
        </div>
        <div class="social-fone">
          <a class="fone" :href="`tel:${contact.phone}`">
            <span>{{ contact.phone }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialLogos from '~/components/common/SocialLogos'

export default {
  components: {
    SocialLogos,
  },

  props: {
    contact: {
      type: Object,
      required: true,
    },
    socials: {
      type: Array,
      required: true,
    },
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
          color: $green-color;
        }
      }
    }
  }
}
</style>
