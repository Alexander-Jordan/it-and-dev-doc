<script>
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import Button from "./UI/Button.svelte";
    import Header from "./UI/Header.svelte";
    import TextInput from "./UI/TextInput.svelte";

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

    form {
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>

<Header />

<main>
    <form on:submit|preventDefault={addMeetup}>
        <TextInput
            id="title"
            label="Title"
            value={title}
            on:input={(event) => title = event.target.value}
        />
        <TextInput
            id="subtitle"
            label="Subtitle"
            value={subtitle}
            on:input={(event) => subtitle = event.target.value}
        />
        <TextInput
            id="address"
            label="Address"
            value={address}
            on:input={(event) => address = event.target.value}
        />
        <TextInput
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            on:input={(event) => imageUrl = event.target.value}
        />
        <TextInput
            id="email"
            label="E-Mail"
            inputType="email"
            value={email}
            on:input={(event) => email = event.target.value}
        />
        <TextInput
            id="description"
            label="Description"
            controlType="textarea"
            value={description}
            on:input={(event) => description = event.target.value}
        />
        <Button type="submit" caption="Save" />
    </form>

    <MeetupGrid {meetups} />
</main>
