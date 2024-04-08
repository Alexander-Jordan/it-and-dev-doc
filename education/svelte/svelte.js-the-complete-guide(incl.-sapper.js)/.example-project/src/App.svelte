<script>
    import { fade, fly, slide, scale } from 'svelte/transition';

    let showParagraph = false;
</script>

<button on:click={() => {showParagraph = !showParagraph}}>Toggle</button>

{#if showParagraph}
    <p 
        transition:fly={{x: 300}}
        on:introstart={() => console.log('Adding starts')}
        on:introend={() => console.log('Adding ends')}
        on:outrostart={() => console.log('Removing starts')}
        on:outroend={() => console.log('Removing ends')}
    >
        Can you see me?
    </p>
{/if}
