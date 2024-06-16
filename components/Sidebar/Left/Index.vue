<template>
	<section class="fixed top-0 left-0 h-full w-1/4">
		<nav class="absolute right-5 xl:right-20 top-0 bottom-0 p-3">
			<SidebarLeftLogo />

			<ul class="flex flex-col gap-3 my-6">
				<li v-for="navlink in menu">
					<SidebarLeftTab :navlink="navlink" />
				</li>
			</ul>

			<SidebarLeftPostBtn :click-handler="openModal" />
		</nav>
	</section>

	<Modal
		:close-modal="closeModal"
		:is-modal-open="isModalOpen"
		v-if="isModalOpen"
	/>
</template>

<script setup>
import { menu } from '~/constants/menu';

const isModalOpen = ref(false);

const openModal = () => {
	isModalOpen.value = true;
};
const closeModal = () => {
	isModalOpen.value = false;
};
</script>
