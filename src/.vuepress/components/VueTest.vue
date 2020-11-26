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
    showEl : function(){
      console.log(this.$el)
    }
  }
}
</script>