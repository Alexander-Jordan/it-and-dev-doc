<script>
    import { createEventDispatcher } from 'svelte';

    export let id;
    export let title;
    export let price;
    export let bestseller = false;

    const dispatch = createEventDispatcher();

    function addToCart() {
        dispatch('add-to-cart', {id: id});
    }
</script>

<article>
    <h1>{title}</h1>
    <h2>${price}</h2>
    {#if bestseller}
        <h3>BESTSELLER</h3>
    {/if}
    <button on:click={addToCart}>Add to Cart</button>
    <button on:click={() => dispatch('delete', id)}>Delete</button>
</article>
