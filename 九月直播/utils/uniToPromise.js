function uniToPromise(method,options) {
	return new Promise((resolve,reject)=>{
		options.success = resolve
		options.fail = (err)=>{
			reject(err)
		}
		uni[method](options)
	})
}

export default uniToPromise