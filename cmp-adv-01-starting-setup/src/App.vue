<template>
  <div>
    <the-header></the-header>

    <button @click="setSeletedComponent( 'active-goals' )">
      Active Goals
    </button>

    <button @click="setSeletedComponent( 'manage-goals' )">
      Manage Goals
    </button>
    
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
  
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import ActiveGoals from './components/ActiveGoals';
  import ManageGoals from './components/ManageGoals';
  import TheHeader from './components/layout/TheHeader';

  export default {
    components: {
      ActiveGoals,
      ManageGoals,
      TheHeader
    },
    data() {
      return {
        activeUser: {
          description: 'Site owner and admin',
          name: 'Maximilian Schwarzmüller',
          role: 'admin',
        },
        selectedComponent: 'active-goals'
      };
    },
    methods: {
      setSeletedComponent( cmp ) {
        this.selectedComponent = cmp;
      }
    }
  };
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>