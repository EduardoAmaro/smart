<template>
  <a :href="fileUrl(catalog)" @click.prevent="downloadItem()">
    <button class="main-button" :class="{ thicker: thicker }">
      {{ buttonText }}
    </button>
  </a>
</template>

<script>
export default {
  props: {
    catalog: {
      type: Object,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    thicker: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    fileUrl(catalog) {
      const url = this.$store.state.url
      const imagePath = catalog.file.data.attributes.url
      return url + imagePath
    },
    downloadItem() {
      fetch(this.fileUrl(this.catalog))
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement('a')
          link.href = URL.createObjectURL(blob)
          link.download = this.catalog.fileName
          link.click()
          URL.revokeObjectURL(link.href)
        })
        .catch(console.error)
    },
  },
}
</script>
