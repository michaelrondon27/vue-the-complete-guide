const app = Vue.createApp({
    computed: {
        fullName() {
            if ( this.name === '' ) {
                return '';
            }
            return this.name + ' Rondon'; 
        }
    },
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
        outputFullName() {
            if ( this.name === '' ) {
                return '';
            }
            return this.name + ' Rondon';
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
  