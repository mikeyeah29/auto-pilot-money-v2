<template>
	<div class="container mx-auto">

		<div class="flex justify-end mt-4">
			<font-awesome-icon class="text-xl" icon="user-circle" />
		</div>

		<slot></slot>

		<nav class="fixed bottom-0 left-0 flex justify-between px-6 py-4 w-full bg-white border-t">
			<a href="/">
				<font-awesome-icon class="text-xl" icon="tachometer-alt" />
			</a>
			<a href="/cashflow">
				<font-awesome-icon class="text-xl" icon="columns" />
			</a>
			<a href="/budgets">
				<font-awesome-icon class="text-xl" icon="wallet" />
			</a>
			<a href="/debts">
				<font-awesome-icon class="text-xl" icon="credit-card" />
			</a>
		</nav>

	</div>
</template>
<script type="text/javascript">
	
	export default {
		name: 'AppLayout'
	}

</script>