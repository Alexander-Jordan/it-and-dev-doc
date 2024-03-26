<script>
	import CustomInput from "./CustomInput.svelte";
  	import Toggle from "./Toggle.svelte";

	let val = '';
	let value = '';
	let selectedOption = 1;
	let price = 0;
	let agreed;
	let favColor = 'red';
	let favColor2 = ['green'];
	let singleFavColor = 'red';
	let usernameInput;
	let customInput;

	$: console.log(val);
	$: console.log(value);
	$: console.log(selectedOption)
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(favColor);
	$: console.log(favColor2);
	$: console.log(singleFavColor);
	$: console.log(customInput);

	function setValue(event) {
		val = event.target.value;
	}

	function saveData() {
		console.log(document.getElementById('username').value);
		console.log(usernameInput.value);
	}
</script>

<input type="text" value={val} on:input={setValue}>
<input type="text" bind:value={val}>
<input type="text" bind:value>
<CustomInput bind:val={val} bind:this={customInput} />
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price}>

<label>
	<input type="checkbox" bind:checked={agreed} >
	Agree to terms?
</label>

<h1>Favorite Color?</h1>
<label>
	<input type="radio" name="color" value="red" bind:group={favColor}>
	Red
</label>
<label>
	<input type="radio" name="color" value="green" bind:group={favColor}>
	Green
</label>
<label>
	<input type="radio" name="color" value="blue" bind:group={favColor}>
	Blue
</label>

<h1>Favorite Color?</h1>
<label>
	<input type="checkbox" name="color2" value="red" bind:group={favColor2}>
	Red
</label>
<label>
	<input type="checkbox" name="color2" value="green" bind:group={favColor2}>
	Green
</label>
<label>
	<input type="checkbox" name="color2" value="blue" bind:group={favColor2}>
	Blue
</label>

<select bind:value={singleFavColor}>
	<option value="red">Red</option>
	<option value="green">Green</option>
	<option value="blue">Blue</option>
</select>

<hr>

<input type="text" id="username">
<input type="text" bind:this={usernameInput}>
<button on:click={saveData}>Save</button>