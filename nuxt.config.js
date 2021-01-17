export default {
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "nuxt-base-static",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  compilerOptions: {
    types: ["@nuxtjs/auth-next"],
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    BASE_URL: process.env.API_URL,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  /* PUT YOR JWT / API INFO UNDER */

  /* -------------------------- */

  auth: {
    strategies: {
      local: {
        token: {
          property: "data.access_token",
          type: "Bearer",
        },
        user: {
          property: "data.user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/login", method: "post" },
          logout: { url: "/logout", method: "post" },
          register: { url: "/register", method: "post" },
          user: { url: "/user", method: "get" },
        },
      },
    },
    redirect: {
      home: false,
    },
  },

  /* -------------------------- */

  router: {
    //base: '/arcadeluz/',
    middleware: "auth",
  },
};
