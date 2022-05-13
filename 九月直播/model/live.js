import Http from '@/utils/http.js'

class Live {
	page = 1
	data = []
	hasMoreData = false

	async getLiveList() {
		if(this.hasMoreData){
			return this.data
		}
		
		const res = await Http.request({url: `/live/list/${this.page}`,method: "GET"})
		this.page++
		this.hasMoreData = res.length < 10 ? true : false
		this.data = this.data.concat(res)
		console.log('test==>',this.data)
		return this.data
	}

	reset() {
		this.page = 1
		this.data = []
		this.hasMoreData = false
		return this
	}
}

export default Live
