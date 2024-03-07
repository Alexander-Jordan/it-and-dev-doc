<script>
	import ContactCard from "./ContactCard.svelte";

	let name = "Alex";
	let userImgSrc = "https://avatars.githubusercontent.com/u/68730459";
	let jobTitle = "Developer";
	let description = "This is a short description about me.";
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
<input type="url" bind:value="{userImgSrc}">
<input type="text" bind:value="{jobTitle}">
<textarea rows="3" bind:value="{description}"></textarea>
<ContactCard
	userName="{name}"
	userImgSrc="{userImgSrc}"
	jobTitle="{jobTitle}"
	description="{description}"
/>
