new Vue({
    el: '#challenge',
    data: {
        showClass: false,
        cssClass: '',
        twoCssClass: 'destaque secondClass',
        changedClass: '',
        destaque: 'destaque',
        encolher: 'encolher',
        width: 0,
    },
    methods: {
        initializeEffect () {
            this.showClass = !this.showClass
        },
        startProgress () {
            let value = 0;

            const timeout = setInterval(() => {
                value += 50;

                this.width = `${value}px`

                if (value === 500) {
                    clearTimeout(timeout);
                }
            }, 500);
        }
    },
    computed: {
        showEffect () {
            return {
                destaque: this.showClass,
                encolher: !this.showClass,
            }
        },
        changeClass () {
            return this.changedClass === 'false' ? this.destaque : this.encolher
        },
        myBackground () {
            return {
                backgroundColor: '#000',
            }
        },
        myWidth () {
            return {
                width: '300px',
            }
        },
    }
});