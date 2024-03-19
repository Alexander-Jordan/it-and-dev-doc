<script>
	import Product from './Product.svelte'
</script>

<Product
	productTitle='A Book'
	on:add-to-cart={() => alert('Add to cart!')}
	on:delete={() => alert('Delete!')}
/>
