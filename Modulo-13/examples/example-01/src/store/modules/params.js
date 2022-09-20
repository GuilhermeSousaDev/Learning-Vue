export default {
    state: {
        quantity: 2,
        price: 19.9
    },
    mutations: {
        setQuantity(state, payload) {
            state.quantity = payload;
        },
        setPrice(state, payload) {
            state.price = payload;
        }
    },
}