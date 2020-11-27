<template>
  <div id='appX'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Header from '@/components/VueTest.vue'
export default {
  el: '#appX',
  data: {
    message: 'Hello VueJS!'
  },
  mounted: function(){
      alert('MyCComponent!!');
  },
} 
</script>