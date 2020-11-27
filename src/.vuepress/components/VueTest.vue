<template>
  <div id='app'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  el: '#app',
  data: {
    message: 'Hello VueJS!'
  },
  mounted: function(){
      alert('MyCComponent!!');
  },
} 
</script>