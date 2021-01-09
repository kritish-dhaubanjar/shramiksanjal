import en from "./locales/en.json";
import es from "./locales/es.json";
import ne from "./locales/ne.json";

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: "Shramiksanjal" || process.env.npm_package_name,
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/line-awesome.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js",
        body: true
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js",
        body: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios.js",
    "~/plugins/localeContent.js",
    "~/plugins/paginate.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    [
      "nuxt-i18n",
      {
        // strategy: "no_prefix",
        locales: ["en", "es", "ne"],
        defaultLocale: "en",
        vueI18n: {
          fallbackLocale: "en",
          messages: {
            en,
            es,
            ne
            // en: {
            //   home: "HOME"
            // },
            // es: {
            //   home: "CASA"
            // }
          }
        },
        pages: {
          "contact-us": {
            en: "/contact-us",
            es: "/contacto"
          },
          "about-us": {
            en: "/about-us",
            es: "/sobre"
          },
          news: {
            en: "/news",
            es: "/news"
          },
          events: {
            en: "/events",
            es: "/events"
          },
          index: {
            en: "/",
            es: "/",
            ne: "/"
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://api.shramiksanjal.org"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
