<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'VueTest',
  data: {
    message: 'Hello VueJS!'
  },
  mounted: function(){
      alert('MyCComponent!!');
  },
} 
</script>
