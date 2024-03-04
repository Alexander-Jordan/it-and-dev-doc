<script>
	export let name;
	let age = 30;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1;
	}

	function changeName() {
		name = "Alexander"
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Increment Age</button>
<button on:click="{changeName}">Change Name</button>
