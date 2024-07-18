<template>
	<section class="fixed top-0 left-0 h-full w-1/4">
		<nav
			class="absolute right-5 xl:right-20 top-0 bottom-0 p-3 flex flex-col justify-between"
		>
			<div>
				<SidebarLeftLogo />

				<ul class="flex flex-col gap-3 my-6">
					<li v-for="navlink in menu">
						<SidebarLeftTab :navlink="navlink" />
					</li>
				</ul>

				<SidebarLeftPostBtn @click="openModal" />
			</div>

			<SidebarLeftLogout @click="logoutUser" />
		</nav>
	</section>

	<div
		v-if="loading"
		class="fixed top-0 left-0 right-0 bottom-0 bg-zinc-950 opacity-50 z-30"
	>
		<Loader />
	</div>

	<Modal v-if="isModalOpen" :close-modal="closeModal" />
</template>

<script setup>
import { menu } from '~/constants/menu';
import useAuthStore from '~/stores/auth';

const loading = ref(false);

const authStore = useAuthStore();

const { isModalOpen, openModal, closeModal } = useModal();

const logoutUser = () => {
	loading.value = true;
	authStore.logout();
	loading.value = false;
};
</script>
