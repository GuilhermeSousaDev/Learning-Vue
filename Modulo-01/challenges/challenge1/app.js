new Vue({
    el: '#app',
    data: {
        name: "Guilherme",
        age: `${new Date().getFullYear() - 2005}`,
        src: "copo.png",
    },
    methods: {
        ageMultiplyByThree() {
            return this.age * 3;
        },
        randomNumber() {
            return Math.floor(Math.random() * 100);
        }
    },
});