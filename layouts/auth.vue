<template>
	<div class="h-screen w-screen bg-zinc-950">
		<main
			class="h-full w-full m-auto text-zinc-50 flex flex-col md:flex-row justify-center gap-10 md:gap-0 items-center"
		>
			<section class="w-1/2 flex md:justify-center items-center -translate-x-3">
				<img :src="TwitterLogo" alt="" class="w-16 md:w-[28rem]" />
			</section>

			<section class="w-1/2 flex flex-col justify-center items-center">
				<div>
					<h2 class="text-7xl mb-10 text-left font-bold leading-snug">
						Happening Now
					</h2>
					<h5 class="text-3xl mb-8 font-semibold">Join today.</h5>
					<div class="w-80">
						<ButtonPrimary
							width="w-full"
							bg-color="bg-zinc-50"
							text-color="text-zinc-900"
						>
							Sign up with Google
						</ButtonPrimary>

						<div class="w-full h-[1px] bg-zinc-400 my-7 relative bg-opacity-30">
							<span
								class="absolute left-1/2 top-0 -translate-y-1/2 opacity-80 -translate-x-1/2 px-2 bg-zinc-950"
								>or</span
							>
						</div>

						<ButtonPrimary width="w-full" bg-color="bg-sky-500">
							Create account
						</ButtonPrimary>

						<p class="mt-14 mb-4 font-medium text-lg">
							Already have an account?
						</p>
						<ButtonSecondary width="w-full"> Sign in </ButtonSecondary>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import TwitterLogo from '~/assets/images/twitter-logo.svg';
</script>
