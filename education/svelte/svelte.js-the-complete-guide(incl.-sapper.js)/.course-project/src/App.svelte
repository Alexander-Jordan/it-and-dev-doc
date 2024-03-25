<script>
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Button from "./UI/Button.svelte";
    import Header from "./UI/Header.svelte";
    import EditMeetup from "./Meetups/EditMeetup.svelte";

    let meetups = [
        {
            id: 'm1',
            title: 'Coding Bootcamp',
            subtitle: 'Learn to code in 2 hours',
            description: 'In this meetup, we will have some experts that teach you how to code!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/640px-JavaScript_code.png',
            address: '27th Nerd Road, 32523 New York',
            contactEmail: 'code@test.com',
            isFavorite: false
        },
        {
            id: 'm2',
            title: 'Swim Together',
            subtitle: 'Let\'s go for some swimming',
            description: 'We will simply swim a bit!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Polar_bear_swimming.jpg/640px-Polar_bear_swimming.jpg',
            address: '2nd Beach Avenue, 13231 New Zealand',
            contactEmail: 'swim@test.com',
            isFavorite: false
        }
    ]

    let editMode;

    function addMeetup(event) {
        const newMeetup = {
            id: Math.random().toString,
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            description: event.detail.description,
            imageUrl: event.detail.imageUrl,
            address: event.detail.address,
            contactEmail: event.detail.email
        }

        meetups = [newMeetup, ...meetups];
        editMode = null;
    }
    
    function toggleFavorite(event) {
        const id = event.detail;
        // get the meetup that triggered the event
        // (spreading into a new object, to not manipulate the original)
        const updatedMeetup = { ...meetups.find(m => m.id === id) };
        // toggle the `isFavorite`
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        // find the index
        const meetupIndex = meetups.findIndex(m => m.id === id);
        // store the current object of meetups temporarily
        const updatedMeetups = [...meetups];
        // update the meetup triggering this event
        // using the index on the temp object
        updatedMeetups[meetupIndex] = updatedMeetup;
        // update the original meetups object with the updated temp one
        meetups = updatedMeetups;
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
        <Button caption="New Meetup" on:click={() => editMode = 'add'} />
    </div>
    {#if editMode === 'add'}
        <EditMeetup on:save={addMeetup} />
    {/if}
    <MeetupGrid
        {meetups}
        on:togglefavorite={toggleFavorite}
    />
</main>
