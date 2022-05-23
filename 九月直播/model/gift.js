import Http from '@/utils/http.js'
class Gift{
	static getGiftList(){
		return Http.request({url : "/gift/list", method : "GET"})
	}
}

export default Gift