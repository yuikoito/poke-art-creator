require("dotenv").config();
const { API_BASE_URL, API_OGP_URL } = process.env;

export default {
  /*
   ** Headers of the page
   */
  head: {
    title: "ポケモンAAツクール",
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "You can easily convert an image to Pokémon ASCII art style.\r\nポケモン画像でかんたんにアスキーアート化できるサービスです",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "PokeAACreator\r\nポケモンAAツクール",
      },
      { hid: "og:type", property: "og:type", content: "article" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://poke.art-creator.net",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ArtCreator\r\nポケモンAAツクール",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "You can easily convert an image to Pokémon ASCII art style.\r\nポケモン画像でかんたんにアスキーアート化できるサービスです",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://yuilog.xyz/wp-content/uploads/2021/07/pokemon.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content: "https://yuilog.xyz/wp-content/uploads/2021/07/pokemon.png",
      },
      { name: "twitter:site", content: "@yui_active" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          "https://yuilog.xyz/wp-content/uploads/2021/07/9986fb268ef719be10e46ba059323eb2.jpg",
      },
    ],
  },

  target: "static",

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/i18n.js"],

  components: true,

  env: {
    API_BASE_URL,
    API_OGP_URL,
  },
  buildModules: ["@nuxtjs/tailwindcss", "@aceforth/nuxt-optimized-images"],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    ["cookie-universal-nuxt", { parseJSON: false }],
  ],

  /*
   ** Build configuration
   */
  build: {},
};
