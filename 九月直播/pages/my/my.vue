<template>
	<view class="my">
		<view class="profile" v-if="!loginStatus">
			<view class="user-info">
				<view class="advert">
					<image src="../../static/gift/1.png" ></image>
				</view>
				<view class="info">
					<text>未登录</text>
					<text>登录体验更多功能</text>
				</view>
			</view>
			<view class="edit-profile" @click="handleLogin">
				立即登录
			</view>
		</view>
		<view class="profile" v-else>
			<view class="user-info">
				<view class="advert">
					<image :src="user.avatar || '../../static/gift/1.png'" ></image>
				</view>
				<view class="info">
					<text>{{user.username}}</text>
				</view>
			</view>
			<view class="edit-profile">
				编辑资料
			</view>
		</view>
		<view class="f-divider"></view>
		<view class="action">
			<view class="item">
				<view class="option">
					<i-icon class="iconfenxiang"></i-icon>
					<text>我的金币</text>
				</view>
				<view class="value">
					<text>{{user.coin || 0}}币</text>
					<text @click="handleCoin">点击充值</text>
				</view>
			</view>
			<view class="item">
				<view class="option">
					<i-icon class="iconfenxiang"></i-icon>
					<text>我的直播</text>
				</view>
				<view class="value">
					<text>0</text>
					<text>&gt;</text>
				</view>
			</view>
			<view class="item">
				<view class="option">
					<i-icon class="iconfenxiang"></i-icon>
					<text>我的关注</text>
				</view>
				<view class="value">
					<text>0</text>
					<text>&gt;</text>
				</view>
			</view>
			<view class="item">
				<view class="option">
					<i-icon class="iconfenxiang"></i-icon>
					<text>我的历史记录</text>
				</view>
				<view class="value">
					<text>&gt;</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			user(){
				console.log(this.$store.state.user)
				return this.$store.state.user || {}
			},
			loginStatus(){
				return this.$store.state.token && this.$store.state.user
			}
		},
		methods: {
			handleLogin(){
				uni.navigateTo({
					url : "/pages/login/login"
				})
			},
			handleCoin(){
				uni.navigateTo({
					url : "/pages/coin/coin"
				})
			}
		},
		onNavigationBarButtonTap(){
			uni.navigateTo({
				url : '/pages/settings/settings'
			})
		}
	}
</script>

<style lang="scss">
.my{
	height : 100vh;
	display: flex;
	flex-direction: column;
}
.profile{
	height : 180rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 35rpx;
	box-sizing: border-box;
}
.user-info{
	display: flex;
	align-items: center;
	justify-content: center;
}
.user-info .advert{
	width: 107rpx;
	height: 107rpx;
	overflow: hidden;
	border-radius: 50%;
}
.user-info .info{
	display: flex;
	flex-direction: column;
	margin-left: 40rpx;
}
.info text:last-child{
	color : #4c5661;
}
.edit-profile{
	padding:20rpx;
	color : #8745FF;
	border: 1px solid #8745FF;
}
.action{
	flex : 1;
}
.action .item{
	display: flex;
	height : 85rpx;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
}
.option, .value{
	display: flex;
	align-items: center;
}
.option text{
	margin-left : 33rpx;
}
.item:first-child .value text:last-child{
	position: relative;
	top : 0;
}
.value text:last-child{
	color : #4c5661;
	position: relative;
	top : -5rpx;
	margin-left: 20rpx;
}
</style>
