<template>
	<div>
		<PostCard v-for="post in posts" :post="post" />
	</div>
</template>

<script setup>
const posts = [
	{
		id: '060ff3de-45d7-4b4d-a626-e4daf109a54d',
		content:
			'If your application runs on SSR mode, Nuxt will execute the middleware for the initial page both when rendering the page and then again on the client side. Using the process object, you can control the code execution time.\n\nThe code below is from Nuxt.js official documentation and shows some possibilities for controlling the runtime.',
		createdAt: '2024-06-24T07:09:24.536Z',
		user: {
			id: '7e031365-a9f7-4c91-acfc-65a1b8f1e47d',
			name: 'John',
			username: 'john',
		},
	},
	{
		id: '6d14bf61-6726-430b-9497-0578eee4aba9',
		content:
			'Route middleware is directly related to navigation. They act between the current route and the following route so that you can access this information in their arguments.',
		createdAt: '2024-06-24T07:08:01.916Z',
		user: {
			id: '7e031365-a9f7-4c91-acfc-65a1b8f1e47d',
			name: 'John',
			username: 'john',
		},
	},
];
</script>
