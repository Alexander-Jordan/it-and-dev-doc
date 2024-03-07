<script>
	import ContactCard from "./ContactCard.svelte";

	export let name;
	let age = 30;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Increment Age</button>
<input type="text" bind:value="{name}">
<ContactCard />
