<template>
	<div class="h-screen w-screen bg-zinc-950">
		<div class="h-full w-full m-auto text-white flex">
			<SidebarLeft />

			<main
				class="flex-1 ml-[25%] mr-[5%] md:mr-[15%] lg:mr-[30%] h-full m-auto overflow-x-hidden outline outline-1 outline-zinc-700"
			>
				<slot />
			</main>

			<SidebarRight class="hidden lg:block" />
		</div>
	</div>
</template>
