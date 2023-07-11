// store/index.js
export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL || 'http://localhost:1338/api',
  url: process.env.STRAPI_URL || 'http://localhost:1338/',
  contactData: null,
})

export const mutations = {
  setContactData(state, data) {
    state.contactData = data
  },
}
