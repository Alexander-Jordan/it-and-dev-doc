import { writable } from 'svelte/store';

const meetups = writable([
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
]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            id: Math.random().toString(),
            isFavorite: false
        };
        meetups.update(items => {
            return [newMeetup, ...items];
        })
    },
    toggleFavorite: (id) => {
        meetups.update(items => {
            // get the meetup that triggered the event
            // (spreading into a new object, to not manipulate the original)
            const updatedMeetup = { ...items.find(m => m.id === id) };
            // toggle the `isFavorite`
            updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
            // find the index
            const meetupIndex = items.findIndex(m => m.id === id);
            // store the current object of meetups temporarily
            const updatedMeetups = [...items];
            // update the meetup triggering this event
            // using the index on the temp object
            updatedMeetups[meetupIndex] = updatedMeetup;
            // update the original meetups object with the updated temp one
            return updatedMeetups;
        })
    }
}

export default customMeetupsStore;
