import Vue from "vue"
import Vuex from "vuex"
import User from "@/model/user.js"
Vue.use(Vuex)

const store = new Vuex.Store({
	state : {
		token : uni.getStorageSync("token") || "",
		user : uni.getStorageSync("userinfo") ? JSON.parse(uni.getStorageSync("userinfo")) : null
	},
	actions : {
		login({state},token){
			state.token = token
			uni.setStorageSync("token", token)
		},
		userInfo({state},user){
			state.user = user,
			uni.setStorageSync("userinfo",JSON.stringify(user))
		},
		async logout({state}){
			const res = await User.logout()
			state.token = null
			state.user = null
			uni.removeStorageSync("token")
			uni.removeStorageSync("user")
		}
	}
})

export default store