<template>
	<view class="iconfont " :class="name" :style="{fontSize:size + 'rpx', color:color}"></view>
</template>

<script>
	export default {
		name:"i-icon",
		props : {
			name : String,
			size : {
				type : String,
				default: "32"
			},
			color : {
				type : String,
				default: "#333"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
