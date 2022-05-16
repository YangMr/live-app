<template>
	<view class="coin">
		<view class="main">
			<view class="current-coin bg-main">
				<text>当前金币</text>
				<text>50</text>
			</view>
			<view class="line"></view>
			<view class="price">
				<view class="text-muted">请选择充值金额</view>
				<view class="list mt-3">
					<view class="list-item mb-4" @click="handleSelece(index)" :class="{active : index === activeIndex}" v-for="(item,index) in list" :key="index">
						<template v-if="item.price > 0">
							<view class="value">
								<i-icon class="iconbizhongguanli" color="#f5bc00"></i-icon>
								<text class="font-weight-bold font-lg ml-1">{{item.coin}}</text>
							</view>
							<view class="price-value">
								<text class="text-muted">¥ {{item.price}}</text>
							</view>
						</template>
						<view v-else class="text-muted" >自定义</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<i-icon name="iconbizhongguanli" color="#f5bc00"></i-icon>
			<text class="font-weight-bold font-lg ml-1">{{price}}</text>
			<view class="recharge bg-main ml-auto">
				去充值
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price : 0,
				activeIndex : 0,
				list: [{
					coin: 10,
					price: 10
				}, {
					coin: 20,
					price: 20
				}, {
					coin: 30,
					price: 30
				}, {
					coin: 50,
					price: 50
				}, {
					coin: 100,
					price: 100
				}, {
					price: 0
				}]
			}
		},
		onLoad() {
			this.price = this.list[this.activeIndex].price
		},
		methods: {
			handleSelece(index){
				this.activeIndex = index
				this.price =  this.list[index].price
			}
			
		}
	}
</script>

<style lang="scss">
.coin{
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.main{
	flex : 1;
	margin-bottom :103rpx;
	padding: 0 27rpx;
	box-sizing: border-box;
}

.current-coin{
	height : 220rpx;
	border-radius: 10rpx;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	color : #fff;
	margin: 30rpx 0;
}
.line{
	height : 1rpx;
	background-color:  #938f8a;
}
.price{
	padding:30rpx 0;
}
.list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.list-item{
	width: 205rpx;
	height: 130rpx;
	border-radius: 10rpx;
	border:1px solid  #dcdce4;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.list-item.active{
	border:1px solid #8745FF;
}
.list-item .value{
	display: flex;
	align-items: center;
}
.footer{
	height : 100rpx;
	padding :0 50rpx;
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0; 
	width: 100%;
	box-sizing: border-box;
	border-top : 3px solid #e9e8e4;
}

.recharge{
	width: 150rpx;
	height: 70rpx;
	border-radius: 10rpx;
	color : #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
