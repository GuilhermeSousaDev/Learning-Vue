new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
    },
    methods: {
        somar(p) {
            this.contador+= p;
        },
        diminuir() {
            this.contador--;
        },
        updateXY(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        }
    },
});