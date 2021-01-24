<template>
  <li>
    <h3>{{ topicName }}</h3>

    <p>{{ description }}</p>
    
    <button 
      @click="$emit('select-topic', id)"
    >
      Learn More
    </button>
  </li>
</template>

<script>
  export default {
    emits: ['select-topic'],
    props: [
      'description',
      'id', 
      'topicName' 
    ]
  };
</script>