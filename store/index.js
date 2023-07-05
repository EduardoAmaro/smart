// store/index.js
export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL || 'http://localhost:1338/api',
  url: process.env.STRAPI_URL || 'http://localhost:1338/',
})
