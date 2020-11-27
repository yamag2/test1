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
      message: 'MyCGomponent!!'
    }
  },
}
</script>