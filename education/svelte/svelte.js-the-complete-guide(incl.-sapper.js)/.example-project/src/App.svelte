<script>
  import { onDestroy } from 'svelte';
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
  import Button from "./UI/Button.svelte";
  import { timer } from './timer-store.js';

  let showCart = true;

  const unsubscribe = timer.subscribe(count => {
    console.log('App: ' + count)
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

<Button on:click={() => {showCart = !showCart}}>Toggle Cart</Button>
{#if showCart}
  <Cart />
{/if}
<Products />
