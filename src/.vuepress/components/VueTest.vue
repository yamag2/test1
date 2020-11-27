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
    fetch(
      'https://script.google.com/macros/s/AKfycbwucscUpL0i2YlrbXosLWfAYGA9X6IigIKnNyW1wc1BxraDhQ/exec',
    )
    .then(res => res.json())
    .then(
      result => {
        this.books = result
      },
      error => {

      },
    );
  },
} 
</script>