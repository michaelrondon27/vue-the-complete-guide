<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>

        <button @click="toggleFavorite()">
            Toggle Favorite
        </button>

        <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>

        <button @click="$emit('delete', id)">Delete</button>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                detailsAreVisible: false
            };
        },
        emits: [
            'delete',
            'toggle-favorite'
        ],
        // emits: {
        //     'toggle-favorite': function( id ) {
        //         if ( id ) {
        //             return true;
        //         } else {
        //             console.log('Id is missing!');
        //             return false;
        //         }
        //     }
        // },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                this.$emit('toggle-favorite', this.id);
            }
        },
        // props: [
        //     'emailAddress',
        //     'isFavorite',
        //     'name',
        //     'phoneNumber'
        // ]
        props: {
            emailAddress: {
                required: true,
                type: String
            },
            id: {
                required: true,
                type: String 
            },
            isFavorite: {
                default: false,
                required: false,
                type: Boolean,
                // validator: function( value ) {
                //     return value === '1' || value === '0';
                // }
            },
            name: {
                required: true,
                type: String
            },
            phoneNumber: {
                required: true,
                type: String
            },
        }
    }
</script>