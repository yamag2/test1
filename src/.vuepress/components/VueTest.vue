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
	this.message = "result"
  }
}
</script>