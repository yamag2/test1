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
  name: 'VueTest',
  data() {
    return {
      message: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbwucscUpL0i2YlrbXosLWfAYGA9X6IigIKnNyW1wc1BxraDhQ/exec',
    )
      .then(res => res.json())
      .then(
      result => {
		this.message = result
      },
      error => {

      },
    );
  }
}
</script>