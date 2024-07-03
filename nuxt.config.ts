// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,

	devtools: { enabled: true },
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-icons',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore'],
			},
		],
		'@pinia-plugin-persistedstate/nuxt',
	],
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
});
