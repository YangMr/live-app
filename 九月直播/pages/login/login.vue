<template>
	<div class="login">
		<div class="login-logo">
			YOU-LOGIN
		</div>
		<div class="login-form">
			<div class="username">
				<input type="text" v-model.trim="loginForm.username" placeholder="请输入用户名">
			</div>
			<div class="password">
				<input type="password" v-model.trim="loginForm.password" placeholder="请输入密码">
			</div>
			<div class="repassword" v-if="type !== 'login'">
				<input type="password" v-model.trim="loginForm.repassword" placeholder="请输入确认密码">
			</div>
			<div class="button bg-main" @click="handleUserAction">
				{{type === 'login' ? '登 录' : '注 册'}}
			</div>
		</div>
		<div class="register text-center" @click="handleAccontType">
			{{type === 'login' ? '注册账号' : '去登录'}}
		</div>
	</div>
</template>

<script>
	import User from "@/model/user.js"
	export default {
		data() {
			return {
				type : "login",
				loginForm : {
					username : "",
					password : "",
					repassword : ""
				}
			};
		},
		
		methods : {
			handleAccontType(){
				this.type = this.type === 'login' ? 'reg' : 'login'
				this.setNavationBarTitile()
				this.resetForm()
			},
			handleUserAction(){
				this.type === 'login' ? this.handleUserLogin() : this.handleUserRegister()
			},
			async handleUserLogin(){
				delete this.loginForm.repassword
				const res = await User.login(this.loginForm)
				this.$store.dispatch("login", res.token)
				this.getUserInfo()
			},
			async getUserInfo(){
				const res = await User.userInfo()
				this.$store.dispatch("userInfo",res)
				uni.showToast({title : "登录成功", icon : "none"})
				uni.navigateBack({
					delta : 1
				})
			},
			async handleUserRegister(){
				const res = await User.register(this.loginForm)
				uni.showToast({title : '注册成功', icon : "none"})
				this.type = 'login'
				this.setNavationBarTitile()
				this.resetForm()
			},
			setNavationBarTitile(){
				let title = this.type === 'reg' ? '注册' : '登录'
				uni.setNavigationBarTitle({title})
			},
			resetForm(){
				this.loginForm = {
					username : "",
					password : "",
					repassword : ""
				}
			}
		}
	}
</script>

<style lang="scss">
.login{
	height : 100vh;
}
.login-logo{
	height : 285rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 45rpx;
}
.login-form{
	padding:0 30rpx;
}
.username, .password, .repassword{
	height:95rpx;
	width: 100%;
	background-color: #f9f9fb;
	padding: 0 30rpx;
	box-sizing: border-box;
	margin-top: 25rpx;
}

.username input, .password input, .repassword input{
	width: 100%;
	height: 100%;
}
.button{
	width: 100%;
	height:100rpx;
	color : #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15rpx;
	margin-top:45rpx;
	font-size: 32rpx;
}
.register{
	color : #b2b1ad;
	margin-top : 50rpx;
}

</style>
