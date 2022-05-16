<template>
	<view class="settings">
		<view class="p-2">
			<view class="logout bg-main" @click="handleLogout">退出登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async handleLogout(){
				await this.$store.dispatch("logout")
				uni.showToast({title : "退出成功", icon : "none"})
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>

<style>
.logout{
	height: 100rpx;
	color : #fff;
	border-radius: 10rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
