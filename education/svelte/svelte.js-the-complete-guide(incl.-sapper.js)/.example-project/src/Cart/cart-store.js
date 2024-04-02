import { writable } from 'svelte/store';

const cart = writable([
    {
        id: "p3",
        title: "Test",
        price: 9.99
    },
    {
        id: "p4",
        title: "Test",
        price: 9.99
    }
]);

const createCart =  {
    subscribe: cart.subscribe,
    addItem: (item) => {
        cart.update(c => {
            return [...c, item];
        })
    },
    removeItem: (id) => {
        cart.update(c => {
            return c.filter(item => item.id !== id);
        })
    },
}

export default createCart;
