<template>
	
	<div class="error-box bg-danger w-full absolute left-0 bottom-0 text-center p-2" 
		 v-if="errors && errors.length > 0">
		<p v-for="error in errors" class="text-white">{{ error }}</p>
	</div>

</template>
<script>

	export default {
		name: 'ErrorBox',
		computed: {
			errors() {
				return this.$store.state.errors;
			}
		}
	}

</script>
<style type="text/css" lang="scss">
	
	.error-box p {
		color: #fff;
	}

</style>