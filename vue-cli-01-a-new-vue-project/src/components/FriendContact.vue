<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>

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
    </li>
</template>

<script>
    export default {
        data() {
            return {
                detailsAreVisible: false,
                friendIsFavorite: this.isFavorite
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                this.friendIsFavorite = !this.friendIsFavorite;
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