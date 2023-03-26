// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxt/image-edge'],
  app:{
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: "Template Started",
      meta: [
        { name: "viewport",},
        { content: "width=device-width, initial-scale=1"},
        { charset: "utf-8"},
        { name: 'description', content: 'description' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;700&display=swap' },
      ],
    }    
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `
          //   @import '~/assets/styles/reset.scss';
          //   @import '~/assets/styles/variables.scss';
          //   @import '~/assets/styles/app.scss';
          //   `,
        }
      }
    },
  },
  css: ["~/assets/main.scss",],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
