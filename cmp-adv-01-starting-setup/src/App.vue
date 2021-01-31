<template>
  <div>
    <the-header></the-header>
    
    <badge-list></badge-list>
    
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
  import BadgeList from './components/BadgeList.vue';
  import TheHeader from './components/TheHeader';
  import UserInfo from './components/UserInfo.vue';

  export default {
    components: {
      BadgeList,
      TheHeader,
      UserInfo
    },
    data() {
      return {
        activeUser: {
          description: 'Site owner and admin',
          name: 'Maximilian Schwarzmüller',
          role: 'admin',
        },
      };
    },
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