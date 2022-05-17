<template>
	<view class="coin">
		<view class="main">
			<view class="current-coin bg-main">
				<text>当前金币</text>
				<text>{{ coin }}</text>
			</view>
			<view class="line"></view>
			<view class="price">
				<view class="text-muted">请选择充值金额</view>
				<view class="list mt-3">
					<view class="list-item mb-4" @click="handleSelece(index)" :class="{ active: index === activeIndex }" v-for="(item, index) in list" :key="index">
						<template v-if="item.price > 0">
							<view class="value">
								<i-icon class="iconbizhongguanli" color="#f5bc00"></i-icon>
								<text class="font-weight-bold font-lg ml-1">{{ item.coin }}</text>
							</view>
							<view class="price-value">
								<text class="text-muted">¥ {{ item.price }}</text>
							</view>
						</template>
						<view v-else class="text-muted">自定义</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<i-icon name="iconbizhongguanli" color="#f5bc00"></i-icon>
			<text class="font-weight-bold font-lg ml-1">{{ price }}</text>
			<view class="recharge bg-main ml-auto" @click="handlePay">去充值</view>
		</view>

		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog confirmText="确定" cancelText="取消"  placeholder="请输入充值金额" title="提示" mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
import Pay from "@/model/pay.js"
export default {
	data() {
		return {
			price: 0,
			activeIndex: 0,
			list: [
				{
					coin: 10,
					price: 10
				},
				{
					coin: 20,
					price: 20
				},
				{
					coin: 30,
					price: 30
				},
				{
					coin: 50,
					price: 50
				},
				{
					coin: 100,
					price: 100
				},
				{
					price: 0
				}
			]
		};
	},
	computed: {
		coin() {
			return this.$store.state.user.coin || 0;
		}
	},
	onLoad() {
		this.price = this.list[this.activeIndex].price;
	},
	methods: {
		handleSelece(index) {
			this.activeIndex = index;
			const p = this.list[index].price;
			if (p > 0) {
				this.price = p;
			} else {
				this.$refs.popup.open();
			}
		},
		close() {
			this.$refs.popup.close();
		},
		confirm(value) {
			const val = Number(value)
			if(typeof val === "number" && !isNaN(val) ){
				this.price = value
			}
			this.$refs.popup.close();
		},
		async handlePay(){
			const data = {price : this.price}
			const orerInfo = await Pay.pay(data)
			console.log("---res",orerInfo)
			uni.requestPayment({
				provider:"wxpay",
				orderInfo : orerInfo,
				success : (response)=>{
					console.log("response==>",response)
				},
				fail : (error)=>{
					uni.showModal({
						title: '提示',
						content: '支付失败',
						showCancel: false,
					});
					console.log("err=>",error)
				}
			})
		}
	}
};
</script>

<style lang="scss">
.coin {
	display: flex;
	flex-direction: column;
	height: 100vh;
}
.main {
	flex: 1;
	margin-bottom: 103rpx;
	padding: 0 27rpx;
	box-sizing: border-box;
}

.current-coin {
	height: 220rpx;
	border-radius: 10rpx;
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	margin: 30rpx 0;
}
.line {
	height: 1rpx;
	background-color: #938f8a;
}
.price {
	padding: 30rpx 0;
}
.list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.list-item {
	width: 205rpx;
	height: 130rpx;
	border-radius: 10rpx;
	border: 1px solid #dcdce4;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.list-item.active {
	border: 1px solid #8745ff;
}
.list-item .value {
	display: flex;
	align-items: center;
}
.footer {
	height: 100rpx;
	padding: 0 50rpx;
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	border-top: 3px solid #e9e8e4;
}

.recharge {
	width: 150rpx;
	height: 70rpx;
	border-radius: 10rpx;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
