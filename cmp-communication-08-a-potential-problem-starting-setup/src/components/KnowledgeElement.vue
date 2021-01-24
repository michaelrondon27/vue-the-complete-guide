<template>
  <li>
    <h3>{{ topicName }}</h3>

    <p>{{ description }}</p>
    
    <button 
      @click="selectTopic( id )"
    >
      Learn More
    </button>
  </li>
</template>

<script>
  export default {
    emits: ['select-topic'],
    inject: ['selectTopic'],
    props: [
      'description',
      'id', 
      'topicName' 
    ]
  };
</script>