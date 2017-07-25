import * as types from '../mutation-types';
import common from '../mutations';
const state = {
	pages:[]
	
}
const getters = {
	pages:(state, getters) => {
		return state.pages;
	}
}
// actions
const actions = {
	//保存页面
	getPages({commit,state}){
		commit(types.PAGE_LIST);
	}
}

// mutations
const mutations = {
	[types.PAGE_LIST](status,data){
		common.PageList(data)
			.then(res => {
				let pages = res.pages;
				let styles = ['width','height','left','top','fontSize'];			
				pages.forEach(function(page,index){
					page.modules.forEach(function(module,index){
						styles.forEach(function(cssProp,index){
							let cssVal = +module.style[cssProp].replace(/px/ig,'');
							module.style[cssProp] = cssVal/75 + 'rem';
						})
					})
				})
				status.pages = pages;
			})
			.catch(error => {
				console.log(error)
			})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}