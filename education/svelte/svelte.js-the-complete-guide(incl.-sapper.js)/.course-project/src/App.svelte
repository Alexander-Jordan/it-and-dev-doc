<script>
    import meetups from './Meetups/meetups-store.js';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Button from "./UI/Button.svelte";
    import Header from "./UI/Header.svelte";
    import EditMeetup from "./Meetups/EditMeetup.svelte";
    import MeetupDetail from './Meetups/MeetupDetail.svelte';

    let editMode;
    let editedId;
    let page = 'overview';
    let pageData = {};

    function addMeetup(event) {
        editMode = null;
        editedId = null;
    }

    function cancelEdit() {
        editMode = null;
        editedId = null;
    }

    function showDetails(event) {
        page = 'details';
        pageData.id = event.detail;
    }

    function closeDetails() {
        page = 'overview';
        pageData = {};
    }

    function startEdit(event) {
        console.log('test');
        editMode = 'edit';
        editedId = event.detail;
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
    {#if page === 'overview'}
        <div class="meetup-controls">
            <Button on:click={() => editMode = 'edit'}>
                New Meetup
            </Button>
        </div>
        {#if editMode === 'edit'}
            <EditMeetup id={editedId} on:save={addMeetup} on:cancel={cancelEdit} />
        {/if}
        <MeetupGrid
            meetups={$meetups}
            on:showdetails={showDetails}
            on:edit={startEdit}
        />
    {:else}
        <MeetupDetail id={pageData.id} on:close={closeDetails} />
    {/if}
</main>
