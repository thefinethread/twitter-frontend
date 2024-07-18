<template>
	<div
		@click="handleOverlayClick"
		class="fixed left-0 h-full flex w-full justify-center items-start z-30 backdrop-blur-md"
	>
		<div
			@click.stop
			class="bg-zinc-950 rounded-2xl p-5 w-[40rem] border-[1px] border-zinc-700 flex flex-col justify-between items-start mt-10 mb-10 max-h-[46rem]"
		>
			<div class="w-full pb-4 backdrop-blur-xl backdrop-filter bg-opacity-50">
				<button
					@click="closeModal"
					class="hover:bg-zinc-800 transition-colors p-1 rounded-full"
				>
					<XMarkIcon class="w-5" />
				</button>
			</div>

			<div class="flex gap-3 w-full min-h-24 py-2">
				<slot />
				<img :src="GoogleLogo" alt="" class="w-10 h-10 rounded-full" />
				<form
					@submit.prevent="handleSubmit"
					class="flex-1 h-[calc(100%_-_40px)]"
				>
					<div class="flex gap-3 w-full py-2 overflow-y-scroll max-h-[70vh]">
						<div class="flex-1">
							<div
								ref="inputRef"
								contenteditable
								class="text-zinc-200 text-lg placeholder outline-none translate-y-1"
								:data-placeholder="'What is happening?!'"
								@input="updateContent"
							></div>

							<!-- <div class="w-full my-7 relative" v-if="imageUpload">
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
							</div> -->
						</div>
					</div>

					<div class="w-full h-[1px] bg-zinc-300 bg-opacity-20 my-5"></div>

					<div class="flex justify-between items-center w-full">
						<ul>
							<!-- <li class="relative">
								<button class="cursor-pointer">
									<PhotoIcon class="w-6 text-blue-400" />
								</button>
								<input
									type="file"
									class="absolute` top-0 left-0 w-full h-full opacity-0 cursor-pointer"
									@change="handleFileChange"
									accept="image/*"
								/>
							</li> -->
						</ul>

						<ButtonPrimary
							:disabled="postBtnDisabled"
							height="h-9"
							width="w-20"
						>
							<Loader height="h-6" v-if="loading" />
							<p v-else>Post</p>
						</ButtonPrimary>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { XMarkIcon, PhotoIcon } from '@heroicons/vue/24/outline';
import GoogleLogo from '~/assets/images/Google.jpg';
import usePost from '~/services/usePost';

const inputRef = ref(null);
const text = ref('');
const loading = ref(false);

const { closeModal } = defineProps(['closeModal']);

const { createPostService } = usePost();

const { $toast } = useNuxtApp();

const handleSubmit = async () => {
	if (!text.value) return;

	loading.value = true;
	try {
		await createPostService({ content: text.value });

		$toast.success('Post created successfully!');
		closeModal();
	} catch (err) {
		$toast.error(err?.data?.message);
	} finally {
		loading.value = false;
	}
};

const updateContent = () => {
	if (inputRef.value) {
		text.value = inputRef.value.innerText;
	}
};

const focusInput = () => {
	if (inputRef.value) {
		inputRef.value.focus();
	}
};

const handleOverlayClick = () => {
	closeModal();
};

const postBtnDisabled = computed(() => !text.value);

onMounted(focusInput);
</script>

<style scoped>
.placeholder:empty::before {
	content: attr(data-placeholder);
	color: rgba(255, 255, 255, 0.5);
	pointer-events: none;
}
</style>
