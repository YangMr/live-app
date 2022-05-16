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
	
	static logout(){
		return Http.request({url : "/logout", method : "POST"})
	}
}
export default User