new Vue({
    el: '#app',
    data: {
        contador: 0,
        x: 0,
        y: 0,
        title: '^Helow'
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
        },
        showAlert(e) {
            alert(e.target.value)
        }
    },
});