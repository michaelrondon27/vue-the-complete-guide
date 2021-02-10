<template>
    <base-card>
        <base-button 
            @click="setSelectedTab( 'stored-resources' )" 
            :mode="storedRestButtonMode"
        >Stored Resources</base-button>

        <base-button 
            @click="setSelectedTab( 'add-resource' )"
            :mode="addRestButtonMode"
        >Add Resource</base-button>
    </base-card>

    <component :is="selectedTab"></component>
</template>

<script>
    import AddResource from './AddResource';
    import StoredResources from './StoredResources';

    export default {
        components: {
            AddResource,
            StoredResources
        },
        computed: {
            addRestButtonMode() {
                return this.selectedTab === 'add-resource' ? null : 'flat'
            },
            storedRestButtonMode() {
                return this.selectedTab === 'stored-resources' ? null : 'flat'
            }
        },
        data() {
            return {
                selectedTab: 'stored-resources',
                storedResources: [
                    { 
                        id: 'official-guide', 
                        title: 'Official Guide', 
                        description: 'The Official Vue.js documentation.',
                        link: 'https://vuejs.org'
                    },
                    { 
                        id: 'google', 
                        title: 'Google', 
                        description: 'Learn to google...',
                        link: 'https://google.es'
                    }
                ]
            };
        },
        methods: {
            setSelectedTab( tab ) {
                this.selectedTab = tab;
            }
        },
        provide() {
            return {
                resources: this.storedResources
            };
        }
    }
</script>
