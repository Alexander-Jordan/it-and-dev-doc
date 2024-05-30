<script>
    import { createEventDispatcher } from 'svelte';
    import meetups from '../../../meetups-store.js';
    import Button from "../UI/Button.svelte";
    import Badge from "../UI/Badge.svelte";

    export let id;
    export let title;
    export let subtitle;
    export let imageUrl;
    export let description;
    export let address;
    export let email;
    export let isFavorite;

    const dispatch = createEventDispatcher();

    function toggleFavorite() {
        fetch(
            `https://svelte-project-5e789-default-rtdb.firebaseio.com/meetups/${id}.json`,
            {
                method: 'PATCH',
                body: JSON.stringify({isFavorite: !isFavorite}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                if (!response.ok) {
                    throw new Error('An error occurred, please try again!');
                }
                meetups.toggleFavorite(id);
            })
            .catch(error => {
                console.log(error);
            });
    }
</script>

<style>
    article {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 5px;
        background: white;
        margin: 1rem;
    }
  
    header,
    .content,
    footer {
        padding: 1rem;
    }
  
    .image {
        width: 100%;
        height: 14rem;
    }
  
    .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  
    h1 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
        font-family: "Roboto Slab", sans-serif;
    }
  
    h1.is-favorite {
        background: #01a129;
        color: white;
        padding: 0 0.5rem;
        border-radius: 5px;
    }
  
    h2 {
        font-size: 1rem;
        color: #808080;
        margin: 0.5rem 0;
    }
  
    p {
        font-size: 1.25rem;
        margin: 0;
    }
  
    div {
        text-align: right;
    }
</style>

<article>
    <header>
        <h1>
            {title}
            {#if isFavorite}
                <Badge>FAVORITE</Badge>
            {/if}
        </h1>
        <h2>{subtitle}</h2>
        <p>{address}</p>
    </header>
    <div class="image">
        <img src="{imageUrl}" alt="{title}">
    </div>
    <div class="content">
        <p>{description}</p>
    </div>
    <footer>
        <Button
            mode="outline"
            on:click={() => dispatch('edit', id)}
        >
            Edit
        </Button>
        <Button href="/meetups/{id}">Show Details</Button>
        <Button
            mode="outline"
            color={isFavorite ? null : 'success'}
            on:click={toggleFavorite}
        >
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
    </footer>
</article>
