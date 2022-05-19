<script>
	export default {
		onLaunch: function() {
			//处理nvue加载自定义图标
			const domModule = weex.requireModule('dom')
			domModule.addRule('fontFace', {
			    'fontFamily': "iconfont",
			    'src': "url('http://at.alicdn.com/t/font_1859985_7mxozsfdvib.ttf')"
			});


			// 点击中间按钮会执行的方法
			uni.onTabBarMidButtonTap(() => {
				this.authJump({
					url: "/pages/create-live/create-live"
				})
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
	/* #ifndef APP-PLUS-NVUE */
	@import url("@/common/iconfont/iconfont.css");
	/* #endif */
</style>
