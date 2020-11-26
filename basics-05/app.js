const app = Vue.createApp({
    computed: {
        fullName() {
            if ( this.name === '' || this.lastName === '' ) {
                return '';
            }

            return this.name + ' ' + this.lastName; 
        }
    },
    data() {
        return {
            counter: 0,
            // fullName: '',
            lastName: '',
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
    },
    watch: {
        counter( value ) {
            if ( value > 50 ) {
                setTimeout( () => {
                    this.counter = 0;
                }, 2000);
            }
        },
        // lastName( value ) {
        //     if ( value === '' ) {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = this.name + ' ' + value;
        //     }
        // },
        // name( value ) {
        //     if ( value === '' ) {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = value + ' ' + this.lastName;
        //     }
        // }
    }
});
  
app.mount('#events');
  