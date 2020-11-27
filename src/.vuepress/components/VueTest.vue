<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      message: 'Book List',
      books: null,
    }
  },
  mounted() {
      alert('MyGomponent!!');
  },
} 
</script>