import  Http from "@/utils/http.js"
class User{
	static login(data){
		return Http.request({url : "/login", method : "POST", data})
	}
	
	static register(data){
		return Http.request({url : "/reg", method : "POST", data})
	}
	
	static userInfo(){
		return Http.request({url : "/user/info", method : "GET"})
	}
}
export default User