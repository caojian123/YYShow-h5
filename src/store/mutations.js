import axios from 'axios';
//import host from '../host';
import qs from 'qs';

//axios.defaults.baseURL = host.api;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//axios.defaults.headers.post['Accept'] = '*/*';

//POST传参序列化
axios.interceptors.request.use((config) => {
	if(config.method === 'post' && config.isUpload !== true) {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	_.toast("错误的传参", 'fail');
	return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
	return res;
}, (error) => {
	_.toast("网络异常", 'fail');
	return Promise.reject(error);
});

export function fetch(url, params={}) {
	const postData = {
		partner: localStorage.getItem('username'),
		partnerChannelId: localStorage.getItem('partnerChannelId'),
		partner_access_token: localStorage.getItem('token'),
		system: 'pc'
	};
	Object.keys(postData).forEach((key) => {
		params[key] = params[key] || postData[key]
	});
	return new Promise((resolve, reject) => {
		axios.get(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
			})
			.catch((error) => {
				reject(error)
			})
	})
}

export default {
	//页面列表
	PageList(params) {
		return fetch('../static/data.json', params)
	}
}