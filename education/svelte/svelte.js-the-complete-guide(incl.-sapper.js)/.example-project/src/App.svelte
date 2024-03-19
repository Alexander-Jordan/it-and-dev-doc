<script>
	import Product from './Product.svelte'

	let products = [
		{
			id: 'p1',
			title: 'A book',
			price: 9.99
		}
	]

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
