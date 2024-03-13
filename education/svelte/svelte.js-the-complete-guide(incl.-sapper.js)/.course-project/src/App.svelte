<script>
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Header from "./UI/Header.svelte";

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

    let meetups = [
        {
            id: 'm1',
            title: 'Coding Bootcamp',
            subtitle: 'Learn to code in 2 hours',
            description: 'In this meetup, we will have some experts that teach you how to code!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/640px-JavaScript_code.png',
            address: '27th Nerd Road, 32523 New York',
            contactEmail: 'code@test.com'
        },
        {
            id: 'm2',
            title: 'Swim Together',
            subtitle: 'Let\'s go for some swimming',
            description: 'We will simply swim a bit!',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Polar_bear_swimming.jpg/640px-Polar_bear_swimming.jpg',
            address: '2nd Beach Avenue, 13231 New Zealand',
            contactEmail: 'swim@test.com'
        }
    ]

    function addMeetup() {
        const newMeetup = {
            id: Math.random().toString,
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            address: address,
            contactEmail: email
        }

        meetups = [newMeetup, ...meetups];
    }
</script>

<style>
    main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault={addMeetup}>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" bind:value={title}>
        </div>
        <div class="form-control">
            <label for="subtitle">Subtitle</label>
            <input type="text" id="subtitle" bind:value={subtitle}>
        </div>
        <div class="form-control">
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address}>
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" bind:value={imageUrl}>
        </div>
        <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="text" id="email" bind:value={email}>
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea rows="3" id="description" bind:value={description}></textarea>
        </div>
        <button type="submit">Save</button>
    </form>

    <MeetupGrid {meetups} />
</main>
