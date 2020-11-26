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
methods: {
  window:onload = function() {  
   alert('koko');
  },
}
}
</script>