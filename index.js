function transfer(s) {
	let stack = []
	let len = s.length
	for (let i = 0; i < len; i++) {
		if (
			stack.length === 0 ||
			stack[stack.length - 1] === s[i] ||
			(stack[stack.length - 1] !== s[i].toUpperCase() &&
				stack[stack.length - 1] !== s[i].toLowerCase())
		) {
			stack.push(s[i])
		} else {
			stack.pop()
		}
	}
	return stack.join('')
}
var a = transfer('leEeecode')
console.log(a)
