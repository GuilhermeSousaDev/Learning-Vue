new Vue({
    el: '#challenge',
    data: {
        inputValue: '',
    },
    methods: {
        showAlert() {
            alert('Vue');
        },
        changeData(e) {
            this.inputValue = e.target.value;
        }
    },
});