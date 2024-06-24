<template>
	<div class="flex justify-between items-center gap-10">
		<ul class="flex flex-1 justify-between items-center">
			<li v-for="stat in stats">
				<PostStatsItem :option="stat" />
			</li>
		</ul>

		<ul class="flex justify-between items-center gap-3">
			<li v-for="extraOption in extraOptions">
				<PostStatsItem :option="extraOption" />
			</li>
		</ul>
	</div>
</template>

<script setup>
import {
	ChatBubbleOvalLeftIcon,
	ArrowPathRoundedSquareIcon,
	ChartBarSquareIcon,
	HeartIcon,
	BookmarkIcon,
	ArrowUpTrayIcon,
} from '@heroicons/vue/24/outline';

const stats = [
	{
		label: 'Reply',
		icon: ChatBubbleOvalLeftIcon,
		value: '55k',
	},
	{
		label: 'Repost',
		icon: ArrowPathRoundedSquareIcon,
		value: '10.2k',
	},
	{
		label: 'Link',
		icon: HeartIcon,
		value: '77k',
	},
	{
		label: 'Views',
		icon: ChartBarSquareIcon,
		value: '4.6M',
	},
];

const extraOptions = [
	{
		label: 'Bookmark',
		icon: BookmarkIcon,
	},
	{
		label: 'Share',
		icon: ArrowUpTrayIcon,
	},
];
</script>
