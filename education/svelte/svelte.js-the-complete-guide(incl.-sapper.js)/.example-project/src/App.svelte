<script>
    import { fade, fly, slide, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';

    let boxInput;
    let boxes = [];

    function addBox() {
        boxes = [boxInput.value, ...boxes]
    }
</script>

<style>
    div {
        width: 10rem;
        height: 10rem;
        background: #ccc;
        margin: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        padding: 1rem;
    }
</style>

<input type="text" bind:this={boxInput}>
<button on:click={addBox}>Add</button>

{#each boxes as box (box)}
    <div
        transition:fly={{ x: 300 }}
        animate:flip={{ duration: 300 }}
        on:click={discard.bind(this, box)}
    >
        {box}
    </div>
{/each}
