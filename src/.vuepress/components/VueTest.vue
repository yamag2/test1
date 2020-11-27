<template>
  <div id='appX'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  el: '#appX',
  data: {
    message: 'Hello VueJS!'
  },
  mounted: function(){
      alert('MyCComponent!!');
      message = 'Hello VueJS!'
  },
} 
</script>