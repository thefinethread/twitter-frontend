<template>
	<div
		@click="handleOverlayClick"
		class="fixed left-0 h-full flex w-full bg-zinc-700 bg-opacity-50 justify-center items-start z-30"
	>
		<div
			@click.stop
			class="bg-zinc-950 rounded-2xl p-5 w-[40rem] flex flex-col justify-between items-start translate-y-10"
		>
			<button
				@click="closeModal"
				class="hover:bg-zinc-800 transition-colors p-1 rounded-full -translate-x-2 mb-6"
			>
				<XMarkIcon class="w-5" />
			</button>
			<div class="flex gap-3 w-full">
				<img :src="GoogleLogo" alt="" class="w-10 h-10 rounded-full" />
				<div class="flex-1">
					<div
						ref="inputRef"
						contenteditable
						class="text-white text-lg placeholder outline-none translate-y-1"
						:data-placeholder="'What is happening?!'"
					></div>

					<div class="w-full my-7 relative">
						<img
							:src="img"
							alt=""
							class="w-full my-7 rounded-2xl object-cover"
						/>
						<button
							class="bg-zinc-800 bg-opacity-70 hover:bg-zinc-800 absolute right-1 top-1 transition-colors p-1 rounded-full"
						>
							<XMarkIcon class="w-5" />
						</button>
					</div>
				</div>
			</div>

			<div class="w-full h-[1px] bg-zinc-300 bg-opacity-20 my-5"></div>

			<div class="flex justify-between items-center w-full">
				<ul>
					<li>
						<button>
							<PhotoIcon class="w-6 text-blue-400" />
						</button>
					</li>
				</ul>

				<ButtonPrimary> Post </ButtonPrimary>
			</div>
		</div>
	</div>
</template>

<script setup>
import { XMarkIcon, PhotoIcon } from '@heroicons/vue/24/outline';
import GoogleLogo from '~/assets/images/Google.jpg';
import img from '~/9.jpeg';

const inputRef = ref(null);

const { isModalOpen, closeModal } = defineProps(['isModalOpen', 'closeModal']);

const focusInput = () => {
	if (inputRef.value) {
		inputRef.value.focus();
	}
};

const handleOverlayClick = () => {
	closeModal();
};

onMounted(focusInput);
</script>

<style scoped>
.placeholder:empty::before {
	content: attr(data-placeholder);
	color: rgba(255, 255, 255, 0.5);
	pointer-events: none;
}
</style>
