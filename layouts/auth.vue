<template>
	<div class="h-screen w-screen bg-zinc-950 text-zinc-50">
		<main
			class="h-full w-full m-auto text-zinc-50 flex flex-col md:flex-row justify-center gap-10 md:gap-0 items-center"
		>
			<section
				class="w-80 md:w-1/2 flex md:justify-center items-center -translate-x-3"
			>
				<img :src="TwitterLogo" alt="twitter" class="w-16 md:w-[28rem]" />
			</section>

			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
import TwitterLogo from '~/assets/images/twitter-logo.svg';
</script>
