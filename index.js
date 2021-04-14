function removeOuterParentheses(s) {
	let count = 0
	let str = ''
	let len = s.length
	for (let i = 0; i < len; i++) {
		if ((s[i] === '(' && count++ > 0) || (s[i] === ')' && count-- > 1)) {
			str += s[i]
		}
	}
	return str
}
