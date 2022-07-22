export default {
    data() {
        return {
            fruit: '',
            fruits: ['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add() {
            this.fruits.push(this.fruit);
            this.fruit = '';
        }
    }
}