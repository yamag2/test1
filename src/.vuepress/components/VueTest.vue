<template>
  <div id='app'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  mounted() {
	  el: '#app',
	  data: {
	    message: 'Hello VueJS!'
	  }
  },
} 
</script>