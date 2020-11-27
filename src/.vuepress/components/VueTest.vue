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
  created() {
      alert('MyGomponent!!');
  },
  mounted() {
      alert('MyGomponent!!');
  },
} 
</script>