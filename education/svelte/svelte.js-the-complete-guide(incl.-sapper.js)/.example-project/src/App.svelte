<script>
	import Modal from './Modal.svelte';
	import Product from './Product.svelte'

	let products = [
		{
			id: 'p1',
			title: 'A book',
			price: 9.99
		}
	]

	let showModal = false;

	function addToCart(event) {
		console.log(event.detail);
	}

	function deleteProduct(event) {
		console.log(event.detail);
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
	>
		<h1 slot="header">Hi!</h1>
		<p>This works!</p>
		<button
			slot="footer"
			on:click={() => showModal = false}
		>
			Confirm
		</button>
	</Modal>
{/if}
