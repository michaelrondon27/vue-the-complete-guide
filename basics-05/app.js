const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        },
        setName(event, lastName) {
            this.name = event.target.value;
        }
    }
});
  
app.mount('#events');
  