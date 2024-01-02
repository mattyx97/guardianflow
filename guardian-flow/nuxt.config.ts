// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "@pinia/nuxt"],
  nitro: {
    moduleSideEffects: ["lucia/polyfill/node"],
  },
  plugins: ["~/plugins/preline.client.ts"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["stores", "composables/**"],
  },
});
