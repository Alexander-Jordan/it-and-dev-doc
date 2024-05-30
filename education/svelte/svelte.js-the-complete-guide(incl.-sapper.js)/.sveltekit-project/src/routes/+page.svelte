<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import meetups from '../meetups-store.js'
    import Button from '../lib/components/UI/Button.svelte';
    import MeetupFilter from '../lib/components/Meetups/MeetupFilter.svelte';
    import MeetupItem from '../lib/components/Meetups/MeetupItem.svelte';
    import EditMeetup from '../lib/components/Meetups/EditMeetup.svelte';
    import LoadingSpinner from '../lib/components/UI/LoadingSpinner.svelte';

    export let data;

    const dispatch = createEventDispatcher();

    let favoritesOnly = false;
    let editMode;
    let editedId;
    let isLoading;

    $: filteredMeetups = favoritesOnly ? data.loadedMeetups.filter(m => m.isFavorite) : data.loadedMeetups;

    onMount(() => {
        meetups.setMeetups(data.loadedMeetups);
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
