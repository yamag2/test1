<template>
  <div id="app">
    <h1>Hello World</h1>
    <button v-on:click="showEl">show el</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: {
  },
  methods:{
    window: onload = function(){
      alert('this.$el')
    }
  }
}
</script>