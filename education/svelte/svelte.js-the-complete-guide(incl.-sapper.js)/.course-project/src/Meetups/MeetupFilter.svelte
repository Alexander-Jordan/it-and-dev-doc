<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let selectedButton = 0;
</script>

<style>
    div {
        font-size: 0px;
    }

    button {
        background: #aaaaaa;
        font: inherit;
        font-size: 1rem;
        cursor: pointer;
        border: 1px solid #aaaaaa;
        padding: 0.5rem 1rem;
    }

    button:focus {
        outline: none;
    }

    button:first-of-type {
        border-radius: 5px 0 0 5px;
    }

    button:last-of-type {
        border-radius: 0 5px 5px 0;
    }

    button:hover,
    button:active,
    .active {
        background: #cf0056;
        border-color: #cf0056;
        color: white;
    }
</style>

<div>
    <button
        type="button"
        class:active={selectedButton === 0}
        on:click={() => {
            selectedButton = 0;
            dispatch('select', 0);
        }}
    >
        All
    </button>
    <button
        type="button"
        class:active={selectedButton === 1}
        on:click={() => {
            selectedButton = 1;
            dispatch('select', 1);
        }}
    >
        Favorites
    </button>
</div>
