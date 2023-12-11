// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "@pinia/nuxt"],
  plugins: [
    "~/plugins/preline.client.ts",
    "~/plugins/lottie-vue-player.client.js",
  ],

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
