// store/index.js
export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL || 'http://localhost:1338/api',
  url: process.env.STRAPI_URL || 'http://localhost:1338/',
  contactData: null,
  socialData: null,
  footerMenusData: null,
  catalogData: null,
})

export const mutations = {
  setContactData(state, data) {
    state.contactData = data
  },
  setSocialData(state, data) {
    state.socialData = data
  },
  setFooterMenusData(state, data) {
    state.footerMenusData = data
  },
  setCatalogData(state, data) {
    state.catalogData = data
  },
}
