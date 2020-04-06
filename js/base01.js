/**
 * 柯里化
 * https://juejin.im/post/5e8695fd51882573b04733a2
 * 
*/
function add (a, b, c, d) {
	return [
	  ...arguments
	].reduce((a, b) => a + b)
}

function currying (fn) {
	let len = fn.length
	let args = []
	return function _c (...newArgs) {
		// 合并参数
		args = [
			...args,
			...newArgs
		]
		// 判断当前参数集合args的长度是否 < 目标函数fn的需求参数长度
		if (args.length < len) {
			// 继续返回函数
			return _c
		} else {
			// 返回执行结果
			return fn.apply(this, args.slice(0, len))
		}
	}
}
let addCurry = currying(add)
let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用
console.log(total) // 10
