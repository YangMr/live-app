import  Http from "@/utils/http.js"
class Pay{
	static pay(data){
		return Http.request({url : "/gift/wxpay", method : "POST", data })
	}
}
export default Pay