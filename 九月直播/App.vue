<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			
			// 点击中间按钮会执行的方法
			uni.onTabBarMidButtonTap(()=>{
				console.log("123")
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
	}
</script>

<style>
	/*每个页面公共css */
	@import url("@/common/css/reset.css");
	@import url("@/common/css/common.css");
	@import url("@/common/iconfont/iconfont.css");
	
</style>
