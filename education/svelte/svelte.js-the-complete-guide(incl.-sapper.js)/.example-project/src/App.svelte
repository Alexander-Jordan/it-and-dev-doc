<script>
    import { fade, fly, slide, scale } from 'svelte/transition';

    let showParagraph = false;
</script>

<button on:click={() => {showParagraph = !showParagraph}}>Toggle</button>

{#if showParagraph}
    <p
        in:fade
        out:fly={{x: 300}}
    >
        Can you see me?
    </p>
{/if}
