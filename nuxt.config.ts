// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
		[
			'@vee-validate/nuxt',
			{
				autoImports: true,
			},
		],
	],
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
	build: {
		transpile: ['pinia-plugin-persistedstate'],
	},
});
