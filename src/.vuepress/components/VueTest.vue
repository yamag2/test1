<template>
  <div id='appX'>
    <p>{{ message }}</p>
  </div>
</template>

<script>
var app = new Vue({
  el: '#appX',
  data: {
    message: 'Hello Vue!'
  }
})
</script>