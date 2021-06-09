<template>
	
	<div class="container mx-auto">

		<h1 class="text-lg my-4 text-center font-display">AutoPilot Money <br/>Login</h1>

		<div class="bg-white rounded-sm p-2 shadow-sm border" 
		     :class="{ loading: $store.state.loading }">
			
			<div class="mb-2">
				<label class="text-sm block">Email</label>
				<input type="text" 
					   v-model="email" 
					   class="border w-full p-1"
					   :class="{ 'border-danger': showErrors && !validate('email') }" />
			</div>

			<div class="mb-2">
				<label class="text-sm block">Password</label>
				<input type="password" 
					   v-model="password" 
					   class="border w-full p-1"
					   :class="{ 'border-danger': showErrors && !validate('password') }" />
			</div>

			<button class="bg-accent p-2 button w-full rounded-sm" @click="login">login</button>

			<p class="text-xs text-center pt-4 pb-2">or</p>
			<a href="https://autopilot.rwdstaging.co.uk" 
			   class="block text-center underline text-sm">register</a>

		</div>

	</div>

</template>

<script>

	export default {
		name: 'login',
		components: {},
		data() {
			return {
				email: '',
				password: '',
				showErrors: false
			}
		},
		methods: {
			async login() {
				this.errors = [];
				if(!this.email) {
					this.$store.commit('setError', 'email required');
					this.showErrors = true;
					return;
				}
				if(!this.password) {
					this.$store.commit('setError', 'password required');
					this.showErrors = true;
					return;
				}
				var self = this;
				this.$store.dispatch('login', { email: this.email, password: this.password })
					.then(() => {
						self.$router.push('/');
					});
				
			},
			validate(name) {
				if(!this[name]) {
					return false;
				}
				return true;
			}
		}
	}
</script>
<style>

	.button {
		color: white;
	}

</style>