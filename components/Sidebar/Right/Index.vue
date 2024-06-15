<template>
	<section class="fixed top-0 right-0 h-full w-[30%] pl-4">
		<!-- trending-->
		<SidebarRightCard heading="What's happening?">
			<SidebarRightCardItem v-for="{ title, posts } in whatsHappeningItems">
				<NuxtLink to="#">
					<h5>{{ title }}</h5>
					<p class="text-sm opacity-50 font-thin">{{ posts }} posts</p>
				</NuxtLink>
			</SidebarRightCardItem>
		</SidebarRightCard>
		<!-- who to follow -->
		<SidebarRightCard heading="Who to follow?">
			<SidebarRightCardItem
				v-for="{ name, username, image } in whoToFollowItems"
			>
				<NuxtLink to="#">
					<div class="flex justify-between items-center">
						<div class="flex gap-2 items-center">
							<img :src="image" :alt="name" class="w-10 rounded" />
							<div>
								<h5>{{ name }}</h5>
								<p class="text-sm opacity-50 font-thin">@{{ username }}</p>
							</div>
						</div>
						<button
							class="bg-zinc-50 rounded-full text-zinc-900 px-4 font-medium py-1 hover:bg-opacity-90 transition-all"
						>
							Follow
						</button>
					</div>
				</NuxtLink>
			</SidebarRightCardItem>
		</SidebarRightCard>
	</section>
</template>

<script setup>
import GoogleLogo from '@/assets/images/Google.jpg';
import TeslaLogo from '@/assets/images/Tesla.png';
import PlayStationLogo from '@/assets/images/PlayStation.jpg';

const whatsHappeningItems = [
	{
		title: 'SpaceX',
		posts: '18.8k',
	},
	{
		title: '#CodingIsFun',
		posts: '6.8k',
	},
	{
		title: 'artforall',
		posts: '1.4k',
	},
];

const whoToFollowItems = [
	{
		name: 'Google',
		username: 'Google',
		image: GoogleLogo,
	},
	{
		name: 'Tesla',
		username: 'Tesla',
		image: TeslaLogo,
	},
	{
		name: 'PlayStation',
		username: 'PlayStation',
		image: PlayStationLogo,
	},
];
</script>
