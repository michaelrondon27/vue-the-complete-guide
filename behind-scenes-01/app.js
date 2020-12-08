const app = Vue.createApp({
    beforeCreate() {
        console.log('beforeCreate()');
    },
    beforeMount() {
        console.log('beforeMount()');
    },
    beforeUnmount() {
        console.log('beforeUnmount()');
    },
    beforeUpdate() {
        console.log('beforeUpdate()');
    },
    created() {
        console.log('created()');
    },
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!'
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
    },
    mounted() {
        console.log('mounted()');
    },
    unmounted() {
        console.log('unmounted()');
    },
    updated() {
        console.log('updated()');
    }
});
  
app.mount('#app');

setTimeout( function() {
    app.unmount();
}, 3000);

const app2 = Vue.createApp({
    data() {
        return {
            favoriteMeal: 'Pizza'
        };
    },
    template: `
        <p>{{ favoriteMeal }}</p>
    `
});

app2.mount('#app2');

//...

const data = {
    message: 'Hello!',
    longMessage: 'Hello! World!'
};

const handler = {
    set( target, key, value ) {
        if ( key === 'message' ) {
            target.longMessage = value + ' World!';
        }

        target.message = value;
    }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

// console.log(proxy.longMessage);
