<script>
    import { fade, fly, slide, scale } from 'svelte/transition';
    import { cubicIn } from 'svelte/easing';

    let boxInput;
    let boxes = [];

    function addBox() {
        boxes = [...boxes, boxInput.value]
    }

    function discard(value) {
        boxes = boxes.filter(el => el !== value);
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
        transition:fly={{
            delay: 0,
            duration: 400,
            easing: cubicIn,
            start: 0.5,
            opacity: 0,
            x: 300,
            y: 0
        }}
        on:click={discard.bind(this, box)}
    >
        {box}
    </div>
{/each}
