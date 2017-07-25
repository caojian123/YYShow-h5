<template>
  <div class="page">
    <div class="swiper-container">
    <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="page in pages" >
        	<div v-for="module in page.modules">
        	  <ImageCom v-if="module.type == image" :img-obj="module"></ImageCom>
			  	  <TextCom v-if="module.type == text" :text-obj="module"></TextCom>
			  	</div>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
	
import Swiper from '@/assets/script/swiper.min.js'
import ImageCom from '../components/Image.vue'
import TextCom from '../components/Text.vue'

export default {
  name: 'index',
  components: {
		Swiper,
		ImageCom,
    TextCom
	},
  data () {
   return {
	    	'image':'image',
	    	'text':'text'
	  }
  },
  created(){
  	this.$store.dispatch('getPages')
  },
  computed:{
	  ...mapGetters(['pages'])
	},
	 methods: {
  },
  mounted(){  
  	
  	 let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop:true,
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
       /* autoplay: 2500,*/
        autoplayDisableOnInteraction: false
    });
  }
}
</script>

<style lang="stylus" scoped>
  @import '../assets/css/function';
  .page{
  	height: 100%;
  	width: px2rem(750);
  }
  .swiper-container{
  	height: 100%;
  }
</style>
