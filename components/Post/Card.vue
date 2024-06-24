<template>
	<div class="border-b p-4 border-zinc-600 flex items-start gap-2">
		<img :src="GoogleLogo" class="w-10 rounded-full" />
		<div class="flex flex-col gap-4">
			<div>
				<div class="flex justify-between items-center">
					<div>
						<span class="mr-2 font-medium">{{ user.name }}</span>
						<span class="mr-2 opacity-50 font-thin">@{{ user.username }}</span>
						<span class="opacity-50 font-thin">{{ createdAt }}</span>
					</div>
					<button>
						<EllipsisHorizontalIcon class="opacity-50 text-white w-6" />
					</button>
				</div>
				<div>
					<p class="font-normal text-zinc-200 text-[15px] leading-5">
						{{ content }}
					</p>
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
const { id, content, createdAt, user } = post;
</script>
