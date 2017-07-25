<template>
	<div :class="imgObj.className" class="animated" style="position: absolute;" data-type="image" :style="imgObj.style">	
        <img :src="imgObj.url" class="imgItem" alt="yyShow-picture" />
	</div>
</template>

<script>
	export default {
		name:'imageCom',
		 props: {
	        imgObj: {}
	    },
    	data(){
    		return {}
    	}
	}
</script>

<style lang="stylus" scoped>
.imgComp{
	position: absolute;
	z-index: 1;
}
	.imgItem{
		display: block;	
		width: 100%;
		height: 100%;
	}
</style>