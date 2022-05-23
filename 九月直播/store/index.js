import Vue from "vue"
import Vuex from "vuex"
import User from "@/model/user.js"
Vue.use(Vuex)

import io from "@/utils/uni-socket.io.js"
import ApiConfig from "@/config/api.js"

/**
 * 
	1. 引入websocket sdk文件 , sdk文件就是一个js文件  这个文件里面给我们提供了很多的方法和事件监听, 通过这些方法我们可以实现前后端数据实时通讯
	
	2. 在用登录的时候, 通过websocket 和后端建立连接 , 达到数据的实时通讯
	
	3. 在用户刷新页面的时候, 我们还需要 通过websocket 连接后端, 达到数据的实时通讯
	
	4. 当退出登录时, 我们需要断开websocket连接
	
	5. 那我们需要定义哪些方法
	
		5.1 websocket 连接方法
		5.2 websocket 断开连接方法
		
	6. 监听事件方法:
		6.2 监听连接成功的方法
		6.2 监听连接失败的方法
		6.3 监听连接断开的方法
		
		6.4 定义移除监听事件的方法
		
		6.5 监听在线用户信息
		6.6 监听弹幕
		6.7 监听礼物接收
 
 */

const store = new Vuex.Store({
	state : {
		token : uni.getStorageSync("token") || "",
		user : uni.getStorageSync("userinfo") ? JSON.parse(uni.getStorageSync("userinfo")) : null,
		socket : null
	
	},
	actions : {
		// 初始化方法
		init({state,dispatch}){
			if(state.token && state.user){
				dispatch("connectSocket")
			}
		},
		// 断开连接websocket方法
		closeSocket({state}){
			if(state.socket){
				state.socket.close()
			}
		},
		// websocket连接方法
		connectSocket({state}){
			// 使用io实现websocket连接
			const S = io(ApiConfig.socketUrl,{
				query:{},
				transports:['websocket'],
				timeout:5000
			})
			
			// 监听和服务端的websocket是否连接成功,如果连接成功,这个监听事件就会自动触发
			S.on("connect",()=>{
				console.log("连接成功")
				state.socket = S
			})
			
			// 定义监听websocket连接失败的方法
			S.on("error",()=>{
				state.socket = null
				console.log('连接失败')
			})
			
			// 定义监听websocket断开的方法
			S.on("disconnect", ()=>{
				state.socket = null
				console.log('已断开')
			})
		},
		authMethod({state},callback){
			if(!state.token){
				uni.showToast({title : "请先登录", icon:"none"})
				return uni.navigateTo({
					url : "/pages/login/login"
				})
			}
			callback()
		},
		login({state,dispatch},token){
			state.token = token
			uni.setStorageSync("token", token)
			dispatch("connectSocket")
		},
		userInfo({state},user){
			state.user = user,
			uni.setStorageSync("userinfo",JSON.stringify(user))
		},
		async logout({state,dispatch}){
			const res = await User.logout()
			state.token = null
			state.user = null
			uni.removeStorageSync("token")
			uni.removeStorageSync("user")
			
			// 端口websocket连接
			dispatch("closeSocket")
		}
	}
})

export default store