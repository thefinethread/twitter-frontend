<template>
	<div class="relative mb-8">
		<input
			:type="type"
			:id="label"
			v-model="value"
			:name="name"
			class="w-full px-2.5 pb-2.5 pt-5 text-lg text-white bg-transparent outline outline-zinc-700 rounded-md focus:outline-2 focus:outline-sky-500 peer"
			required
		/>
		<label
			:for="label"
			class="text-xl text-zinc-500 absolute transform duration-150 px-2.5 left-0 top-0 translate-y-1/2 peer-focus:translate-y-0 peer-focus:text-sky-500 peer-focus:text-base peer-valid:text-base peer-valid:translate-y-0"
			>{{ label }}</label
		>
		<span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
	</div>
</template>

<script setup>
const { name } = defineProps({
	label: {
		default: '',
	},
	name: {
		default: '',
	},
	type: {
		default: 'text',
	},
});

const { value, errorMessage } = useField(name);
</script>
