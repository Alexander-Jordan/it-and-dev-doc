<script>
  import { tick } from 'svelte';
	import Modal from './Modal.svelte';
	import Product from './Product.svelte'

	let products = [
		{
			id: 'p1',
			title: 'A book',
			price: 9.99
		}
	]

	let text = 'This is some dummy text!';

	let showModal = false;
	let closable = false;

	function addToCart(event) {
		console.log(event.detail);
	}

	function deleteProduct(event) {
		console.log(event.detail);
	}

	function transform(event) {
		// ignore if any other key is pressed than TAB
		if (event.which !== 9) {
			return;
		}
		event.preventDefault();

		// get selection from textarea
		const selectionStart = event.target.selectionStart;
		const selectionEnd = event.target.selectionEnd;
		const value = event.target.value;

		// set the selected text to UPPERCASE
		// this will update the DOM since `text` is used in the markup
		// (triggering beforeUpdate & afterUpdate events)
		text =
			value.slice(0, selectionStart)
			+ value.slice(selectionStart, selectionEnd).toUpperCase()
			+ value.slice(selectionEnd);

		// re-select the previous selection instead of jumping to the end
		// THIS WILL NOT WORK
		// will be run during the same task/tick, before the DOM update
		// (then the selections was never updated)
		event.target.selectionStart = selectionStart;
		event.target.selectionEnd = selectionEnd;
		
		// THIS WILL WORK
		// the `tick()` function let's us add a callback function
		// which will be executed in the next task/tick
		// (meaning that the DOM gets a chance to update first)
		tick().then(() => {
			event.target.selectionStart = selectionStart;
			event.target.selectionEnd = selectionEnd;
		});
	}
</script>

{#each products as product (product.id)}
	<Product
		{...product}
		on:add-to-cart={addToCart}
		on:delete={deleteProduct}
	/>
{/each}

<button on:click={() => showModal = true}>Show Modal</button>

{#if showModal}
	<Modal
		on:cancel={() => showModal = false}
		on:close={() => showModal = false}
		let:didAgree={closable}
	>
		<h1 slot="header">Hi!</h1>
		<p>This works!</p>
		<button
			slot="footer"
			on:click={() => showModal = false}
			disabled={!closable}
		>
			Confirm
		</button>
	</Modal>
{/if}

<textarea rows="5" on:keydown={transform}>{text}</textarea>
