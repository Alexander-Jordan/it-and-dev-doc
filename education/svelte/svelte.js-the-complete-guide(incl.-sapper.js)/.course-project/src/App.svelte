<script>
    import meetups from './Meetups/meetups-store.js';
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Header from "./UI/Header.svelte";
    import EditMeetup from "./Meetups/EditMeetup.svelte";
    import MeetupDetail from './Meetups/MeetupDetail.svelte';
  import LoadingSpinner from './UI/LoadingSpinner.svelte';

    let editMode;
    let editedId;
    let page = 'overview';
    let pageData = {};
    let isLoading = true;

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
            console.log(error);
            isLoading = false;
        });

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
        editMode = 'edit';
        editedId = event.detail;
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    {#if page === 'overview'}
        {#if editMode === 'edit'}
            <EditMeetup id={editedId} on:save={addMeetup} on:cancel={cancelEdit} />
        {/if}
        {#if isLoading}
            <LoadingSpinner />
        {:else}
            <MeetupGrid
                meetups={$meetups}
                on:showdetails={showDetails}
                on:edit={startEdit}
                on:add={() => {editMode = 'edit'}}
            />
        {/if}
    {:else}
        <MeetupDetail id={pageData.id} on:close={closeDetails} />
    {/if}
</main>
