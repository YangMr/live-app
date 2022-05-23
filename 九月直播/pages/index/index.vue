<template>
	<div class="index">
		<div class="advert">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<image mode="aspectFit" src="../../static/demo/banner/1.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image mode="aspectFit" src="../../static/demo/banner/2.jpg" ></image>
				</swiper-item>
			</swiper>
		</div>
		<div class="live">
			<div @click="handleOpenLive(item.id)" class="live-list" v-for="(item,index) in liveList" :key="index">
				<image  class="cover" :src="item.cover ? item.cover : '../../static/demo/1.jpg'" ></image>
				<div class="list-header">
					<div class="coin">
						<i-icon name="iconbizhongguanli" size="32" color="#ffd517"></i-icon>
						<span>{{item.coin}}</span>
					</div>
					<div class="popular">
						人气: <span>{{item.look_count}}</span>
					</div>
				</div>
				<div class="list-footer">
					<div class="name">
						{{item.title}}
					</div>
					<div class="status">
						<span class="circle"></span>
						{{item.status|liveStatus}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Live from "@/model/live.js"
const live = new Live()
export default {
	data() {
		return {
			liveList : []
		};
	},
	onLoad(){
		this.getLiveList()
	},
	filters : {
		liveStatus(val){
			const status = {
				0:"未开始",
				1:"直播中",
				2:"暂停",
				3:"已结束"
			}
			return status[val]
		}
	},
	methods : {
		async getLiveList(){
			const liveList = await live.reset().getLiveList()
			this.liveList = liveList
		},
		handleOpenLive(id){
			uni.navigateTo({
				url : "../live/live?id=" + id
			})
		}
	},
	async onReachBottom(){
		if(live.hasMoreData){
			uni.showToast({title : "已经是最后一页啦", icon : "none"})
			return 
		}
		const liveList = await live.getLiveList()
		this.liveList = liveList
	},
	async onPullDownRefresh(){
		await this.getLiveList()
		uni.stopPullDownRefresh();
	}
};
</script>

<style lang="scss">
.index{
	display: flex;
	flex-direction: column;
	height : 100vh;
}
.advert{
	height : 250rpx;
}
swiper{
	height : 100%;
}
.advert image{
	width: 100%;
	height: 100%;
}
.live{
	flex : 1;
	display: flex;
	flex-wrap: wrap;
	padding:15rpx 10rpx;
	justify-content: space-between;
}
.live-list{
	width: 350rpx;
	height: 350rpx;
	margin-bottom: 15rpx;
	border-radius: 10rpx;
	overflow: hidden;
	border:1px solid #eee;
	position: relative;
}
.live-list .cover{
	width: 100%;
	height : 100%;
}
.list-header{
	position: absolute;
	width: 100%;
	top : 15rpx;
	padding : 0 15rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.coin{
	width: 90rpx;
	height: 45rpx;
	background-color: rgba(0,0,0,0.3);
	border-radius: 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.coin span{
	color : #fff;
	margin-left: 10rpx;
}
.popular{
	width: 125rpx;
	height : 45rpx;
	background-color: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20rpx;
	color : #fff;
}
.popular span{
	color : #fff;
	margin-left: 10rpx;
}
.list-footer{
	position: absolute;
	bottom : 10rpx;
	width: 100%;
	padding: 0 15rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.list-footer .name{
	color : #fff;
	width: 120rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.list-footer .status{
	width: 140rpx;
	height: 42rpx;
	border-radius: 20rpx;
	background-color: rgba(0,0,0,0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	color : #fff;
	font-size:28rpx;
}
.list-footer .circle{
	width: 20rpx;
	height: 20rpx;
	background-color: #dc3546;
	border-radius: 50%;
	margin-right: 10rpx;
}
</style>
