<script>
    import Product from "./Product.svelte";
    import CartItem from "./CartItem.svelte";

    let showProduct = true;

    function toggle() {
        showProduct = !showProduct;
    }
</script>

<button on:click={toggle}>Toggle Display</button>

<svelte:component this={showProduct ? Product : CartItem} title="Test Product" id="p1" />

{#if showProduct}
    <Product title="Test Product" id="p1" />
{:else}
    <CartItem title="Another Product" id="p2" />
{/if}
