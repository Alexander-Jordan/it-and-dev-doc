<script>
	export let name;
	let age = 30;

	$: uppercaseName = name.toUpperCase();

	function incrementAge() {
		age += 1;
	}

	function nameInput(event) {
		const enteredValue = event.target.value;
		name = enteredValue;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {uppercaseName}, my age is {age}!</h1>
<button on:click="{incrementAge}">Increment Age</button>
<input type="text" value="{name}" on:input="{nameInput}">
