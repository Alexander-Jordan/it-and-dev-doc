<script>
    import { createEventDispatcher } from 'svelte';

    export let productTitle;

    const dispatch = createEventDispatcher();

    function addToCart() {
        dispatch('add-to-cart', {id: 'p1'});
    }
</script>

<article>
    <h1>{productTitle}</h1>
    <button on:click={addToCart}>Add to Cart</button>
    <button on:click={() => dispatch('delete', 'p1')}>Delete</button>
</article>
