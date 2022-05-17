import App from './App'
import store from './store'

Vue.prototype.$store = store

Vue.prototype.authJump = function(options){
	if(!store.state.token){
		uni.showToast({title : "请先登录", icon:"none"})
		return uni.navigateTo({
			url : "/pages/login/login"
		})
	}
	uni.navigateTo(options)
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif