<script>
	import Product from './Product.svelte'
</script>

<Product productTitle='A Book' on:click={() => alert('Clicked!')}/>
