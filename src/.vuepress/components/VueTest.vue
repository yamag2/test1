<template>
  <div>
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
	name: 'MyComponent',
	data() {
		return {
		  message: 'MyComponent!!'
		}
	},
	methods: {
	  window:onload = function() {  
	   alert('koko');
	  },
	}
}
</script>