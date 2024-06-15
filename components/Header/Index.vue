<template>
	<header
		class="fixed m-auto right-0 shadow-sm shadow-gray-700 top-0 left-0 h-20 bg-zinc-9500 z-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
	>
		<div class="max-w-5xl h-full m-auto flex items-center justify-between">
			<NuxtLink to="/">
				<img :src="TwitterLogo" alt="twitter" />
			</NuxtLink>

			<div></div>
		</div>
	</header>
</template>

<script setup>
import TwitterLogo from '@/assets/images/twitter-logo.svg';
</script>
