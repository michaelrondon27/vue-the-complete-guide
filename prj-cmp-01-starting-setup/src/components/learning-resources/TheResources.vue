<template>
    <base-card>
        <base-buttton @click="setSelectedTab( 'stored-resources' )">Stored Resources</base-buttton>

        <base-button @click="setSelectedTab( 'add-resource' )">Add Resource</base-button>
    </base-card>

    <component :is="selectedTab"></component>
</template>

<script>
    import AddResource from './AddResource';
    import StoredResources from './StoredResources';

    export default {
        components: {
            StoredResources,
            AddResource
        },
        data() {
            return {
                selectedTab: 'stored-resources'
            };
        },
        method: {
            setSelectedTab( tab ) {
                this.selectedTab = tab;
            }
        }
    }
</script>
