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
	],
	alias: {
		pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
	},
});
