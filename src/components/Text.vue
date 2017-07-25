<template>
	<div :class="textObj.className" class="animated" style="position: absolute;" data-type="text" :style="textObj.style">
		<h2>{{textObj.text}}</h2>
	</div>
</template>

<script>
	export default {
		name:'textCom',
		 props: {
	        textObj: {}
	    },
    	data(){
    		return {}
    	}
	}
</script>

<style scoped>
	input{
		width: 100%;
	}
</style>