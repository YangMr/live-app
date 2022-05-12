import uniToPromise from "@/utils/uniToPromise.js"
import ApiConfig from "@/config/api.js"
class Http {
	static async request({url,  method = "GET", data = {}, header = {}}){

		const res = await uniToPromise("request",{
			url : ApiConfig.baseUrl + url,
			data,
			method,
			header : {
				token : wx.getStorageSync("token") || "",
				...header
			}
		})
		
		if(res.statusCode  < 400){
			return res.data.data
		}
		
		if(res.statusCode === 400 && res.data.data === 'Token 令牌不合法!'){
			// TODO token过期处理
			return
		}
		
		const errorMessageText = res.data.data
		
		this._showError(errorMessageText)
	}
	
	
	static _showError(errorMessageText){
		uni.showToast({
			title : errorMessageText,
			icon : "none"
		})
	}
}

export default Http