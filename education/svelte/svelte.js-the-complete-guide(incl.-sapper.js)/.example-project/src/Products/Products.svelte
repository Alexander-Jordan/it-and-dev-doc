<script>
  import { products } from './products-store.js'
  import Product from "../Products/Product.svelte";
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
  }
</style>

<section>
  <h1>Products</h1>
  {#each $products as product (product.id)}
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description} />
  {/each}
</section>
