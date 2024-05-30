<script>
    import { createEventDispatcher, onMount, onDestroy } from 'svelte';
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import meetups from '../meetups-store.js'
    import Button from '../lib/components/UI/Button.svelte';
    import MeetupFilter from '../lib/components/Meetups/MeetupFilter.svelte';
    import MeetupItem from '../lib/components/Meetups/MeetupItem.svelte';
    import EditMeetup from '../lib/components/Meetups/EditMeetup.svelte';
    import LoadingSpinner from '../lib/components/UI/LoadingSpinner.svelte';

    let fetchedMeetups = [];

    const dispatch = createEventDispatcher();

    let favoritesOnly = false;
    let editMode;
    let editedId;
    let isLoading;
    let unsubscribe;

    $: filteredMeetups = favoritesOnly ? fetchedMeetups.filter(m => m.isFavorite) : fetchedMeetups;

    onMount(() => {
        unsubscribe = meetups.subscribe(items => (fetchedMeetups = items));
        isLoading = true;
        fetch('https://svelte-project-5e789-default-rtdb.firebaseio.com/meetups.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Fetching meetups failed, please try again later!');
                }
                return response.json();
            })
            .then(data => {
                const loadedMeetups = [];
                for (const key in data) {
                    loadedMeetups.push({
                        ...data[key],
                        id: key
                    });
                }
                meetups.setMeetups(loadedMeetups.reverse());
                isLoading = false;
            })
            .catch(error => {
                errorMessage = error;
                console.log(error);
                isLoading = false;
            });
    })

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    })

    function setFilter(event) {
        favoritesOnly = event.detail === 1;
    }

    function addMeetup(event) {
        editMode = null;
        editedId = null;
    }

    function cancelEdit() {
        editMode = null;
        editedId = null;
    }

    function startEdit(event) {
        editMode = 'edit';
        editedId = event.detail;
    }
</script>

<style>
    #meetups {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }

    #meetup-controls {
        margin: 1rem;
        display: flex;
        justify-content: space-between;
    }

    #no-meetups {
        margin: 1rem;
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<svelte:head>
	<title>All Meetups</title>
</svelte:head>

{#if editMode === 'edit'}
    <EditMeetup id={editedId} on:save={addMeetup} on:cancel={cancelEdit} />
{/if}
{#if isLoading}
    <LoadingSpinner />
{:else}
    <section id="meetup-controls">
        <MeetupFilter on:select={setFilter} />

        <Button on:click={() => dispatch('add')}>
            New Meetup
        </Button>
    </section>

    {#if filteredMeetups.length === 0}
        <p id="no-meetups">No meetups found, you can start adding some.</p>
    {/if}
    <section id="meetups">
        {#each filteredMeetups as meetup (meetup.id)}
            <div transition:scale animate:flip={{ duration: 300 }}>
                <MeetupItem
                    id={meetup.id}
                    title={meetup.title}
                    subtitle={meetup.subtitle}
                    description={meetup.description}
                    imageUrl={meetup.imageUrl}
                    address={meetup.address}
                    email={meetup.contactEmail}
                    isFavorite={meetup.isFavorite}
                    on:showdetails
                    on:edit
                />
            </div>
        {/each}
    </section>
{/if}
