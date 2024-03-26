<script>
	import CustomInput from "./CustomInput.svelte";
  	import Toggle from "./Toggle.svelte";

	let val = '';
	let value = '';
	let selectedOption = 1;
	let price = 0;

	$: console.log(val);
	$: console.log(value);
	$: console.log(selectedOption)
	$: console.log(price);

	function setValue(event) {
		val = event.target.value;
	}
</script>

<input type="text" value={val} on:input={setValue}>
<input type="text" bind:value={val}>
<input type="text" bind:value>
<CustomInput bind:val={val} />
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price}>
