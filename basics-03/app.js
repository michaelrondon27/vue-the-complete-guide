const app = Vue.createApp({
    data() {
        return {
            confirmedName: '',
            counter: 0,
            name: ''
        };
    },
    methods: {
        add( num ) {
            this.counter = this.counter + num;
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        reduce( num ) {
            this.counter = this.counter - num;
        },
        setName( event, lastName ) {
            this.name = event.target.value + ' ' + lastName;
        },
        submitform() {
            alert('Submitted!');
        }
    }
});
  
app.mount('#events');
  