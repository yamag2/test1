<template>
  <div>
    <input type="text" v-model="message">
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  created() {
      name = 'XXX'
  },
  mounted() {
      alert('MyGomponent!!');
  },
} 
</script>