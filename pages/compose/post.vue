<template>
	<div class="border-b p-4 pr-5 border-zinc-700 flex gap-3">
		<img :src="GoogleLogo" alt="" class="w-10 h-10 rounded-full" />

		<form @submit.prevent="handleSubmit" class="flex-1 h-[calc(100%_-_40px)]">
			<div class="flex gap-3 w-full py-2 overflow-y-scroll max-h-full">
				<div class="flex-1">
					<div
						ref="inputRef"
						contenteditable
						class="text-zinc-200 text-lg placeholder outline-none translate-y-1"
						:data-placeholder="'What is happening?!'"
					></div>

					<div class="w-full my-7 relative" v-if="imageUpload">
						<img
							:src="imageUpload"
							alt=""
							class="w-full my-7 rounded-2xl object-cover"
						/>
						<button
							@click="removeImage"
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
					<li class="relative">
						<button class="cursor-pointer">
							<PhotoIcon class="w-6 text-blue-400" />
						</button>
						<input
							type="file"
							class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
							@change="handleFileChange"
							accept="image/*"
						/>
					</li>
				</ul>

				<ButtonPrimary height="h-9" width="w-20">
					<Loader height="h-6" v-if="loading" />
					<p v-else>Post</p>
				</ButtonPrimary>
			</div>
		</form>
	</div>
</template>

<script setup>
import { XMarkIcon, PhotoIcon } from '@heroicons/vue/24/outline';
import GoogleLogo from '~/assets/images/Google.jpg';
import usePostStore from '~/stores/post';

const inputRef = ref(null);
const imageUpload = ref(null);

const postStore = usePostStore();
const { loading, error } = storeToRefs(postStore);

const handleSubmit = async () => {
	const content = inputRef.value.innerText;

	if (!content) return;

	await postStore.createPost({ content });
	console.log(error);

	if (!error.value) navigateTo('/home');
};

const focusInput = () => {
	if (inputRef.value) {
		inputRef.value.focus();
	}
};

const handleFileChange = (event) => {
	const file = event.target.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			imageUpload.value = e.target.result;
		};
		reader.readAsDataURL(file);
	}
};

const removeImage = () => {
	imageUpload.value = null;
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
