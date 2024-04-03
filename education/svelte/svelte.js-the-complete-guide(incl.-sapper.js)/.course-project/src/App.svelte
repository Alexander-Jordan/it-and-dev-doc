<script>
    import meetups from './Meetups/meetups-store.js';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Button from "./UI/Button.svelte";
    import Header from "./UI/Header.svelte";
    import EditMeetup from "./Meetups/EditMeetup.svelte";

    let editMode;

    function addMeetup(event) {
        meetups.addMeetup({
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            description: event.detail.description,
            imageUrl: event.detail.imageUrl,
            address: event.detail.address,
            contactEmail: event.detail.email
        });
        editMode = null;
    }

    function cancelEdit() {
        editMode = null;
    }
    
    function toggleFavorite(event) {
        const id = event.detail;
        meetups.toggleFavorite(id);
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }

    .meetup-controls {
        margin: 1rem;
    }
</style>

<Header />

<main>
    <div class="meetup-controls">
        <Button on:click={() => editMode = 'add'}>
            New Meetup
        </Button>
    </div>
    {#if editMode === 'add'}
        <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid
        meetups={$meetups}
        on:togglefavorite={toggleFavorite}
    />
</main>
