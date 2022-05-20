// 封装一个将一维数组处理成2维数组的方法

function arr1To2(arr, number) {
	const arr2 = []
	const len = arr.length
	for (let i = 0, j = 0; i < len; i += number, j++) {
		arr2[j] = arr.splice(0, number)
	}
	return arr2
}

export default arr1To2

