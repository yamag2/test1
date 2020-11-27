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
      'https://script.google.com/macros/s/AKfycbzdU4Md20DUSfQFcqJJbUG81LIFGh42WmAQZN_9r3wh3SKSJknB/exec',
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