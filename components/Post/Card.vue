<template>
	<div
		class="border-b p-4 border-zinc-600 border-opacity-50 flex items-start gap-2"
	>
		<img :src="GoogleLogo" class="w-10 rounded-full" />
		<div class="flex flex-1 flex-col gap-4">
			<div>
				<div class="flex justify-between items-center">
					<div>
						<span class="mr-2 font-medium">{{ post.user.name }}</span>
						<span class="mr-2 opacity-40 font-light text-sm"
							>@{{ post.user.username }}</span
						>
						<span class="mr-2 opacity-40 font-light text-sm">{{
							formattedPostDate
						}}</span>
					</div>
					<button>
						<EllipsisHorizontalIcon class="opacity-50 text-white w-6" />
					</button>
				</div>
				<div>
					<p
						class="font-normal text-zinc-200 text-[15px] leading-5"
						v-html="formattedContent"
					></p>
				</div>
			</div>

			<PostStats />
		</div>
	</div>
</template>

<script setup>
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';

import GoogleLogo from '../../assets/images/Google.jpg';
const { post } = defineProps(['post']);

const formattedContent = computed(() => {
	return post.content.replaceAll(`\n`, '<br>');
});

const formattedPostDate = computed(() => formatDate(post.createdAt));
</script>
