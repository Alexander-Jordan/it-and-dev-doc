<script>
	let val = '';
	let value = '';

	$: console.log(val);
	$: console.log(value);

	function setValue(event) {
		val = event.target.value;
	}
</script>

<input type="text" value={val} on:input={setValue}>
<input type="text" bind:value={val}>
<input type="text" bind:value>
