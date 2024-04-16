import { writable } from 'svelte/store';

const meetups = writable([]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    setMeetups: (meetupArray) => {
        meetups.set(meetupArray);
    },
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
        };
        meetups.update(items => {
            return [newMeetup, ...items];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            // get the index of the selected meetup
            const meetupIndex = items.findIndex(i => i.id === id);
            // overwrite the meetup in a temp variable
            const updatedMeetup = { ...items[meetupIndex], ...meetupData };
            // get the all meetups in a temp variable
            const updatedMeetups = [...items];
            // update the selected meetup with our updated meetup
            updatedMeetups[meetupIndex] = updatedMeetup;
            // update the original meetups object with the updated temp one
            return updatedMeetups;
        });
    },
    removeMeetup: (id) => {
        meetups.update(items => {
            return items.filter(i => i.id !== id);
        });
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
        });
    }
}

export default customMeetupsStore;
