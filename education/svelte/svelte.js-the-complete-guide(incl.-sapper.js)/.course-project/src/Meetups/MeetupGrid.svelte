<script>
    import MeetupFilter from "./MeetupFilter.svelte";
    import MeetupItem from "./MeetupItem.svelte";

    export let meetups;

    let favoritesOnly = false;

    $: filteredMeetups = favoritesOnly ? meetups.filter(m => m.isFavorite) : meetups;

    function setFilter(event) {
        favoritesOnly = event.detail === 1;
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
    }

    @media (min-width: 768px) {
        #meetups {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>

<section id="meetup-controls">
    <MeetupFilter on:select={setFilter} />
</section>

<section id="meetups">
    {#each filteredMeetups as meetup}
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
    {/each}
</section>
