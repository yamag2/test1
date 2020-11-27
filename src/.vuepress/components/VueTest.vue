<template>
  <div id='appX'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
const app = new Vue({
  el: '#appX',
  data: {
    message: 'Hello VueJS!'
  },
  mounted: function(){
      alert('MyCComponent!!');
  },
})
</script>