<template>
	<div class="h-screen w-screen bg-zinc-950">
		<div class="h-full w-full m-auto text-white flex1">
			<SidebarLeft />

			<main
				class="w-1/2 h-full m-auto overflow-x-hidden outline outline-1 outline-zinc-800"
			>
				<slot />
			</main>

			<SidebarRight />
		</div>
	</div>
</template>
