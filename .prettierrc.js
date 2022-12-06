module.exports = {
	printWidth: 150, // 一行最多多少个字符
	tabWidth: 2, // 指定每个缩进级别的空格数
	useTabs: true, // 使用制表符而不是空格缩进行
	semi: false, // 在语句末尾打印分号
	singleQuote: true, // 使用单引号而不是双引号
	quoteProps: 'as-needed', // 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	jsxSingleQuote: false, // 在JSX中使用单引号而不是双引号
	trailingComma: 'none', // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	bracketSpacing: true, // 在对象文字中的括号之间打印空格
	jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
	arrowParens: 'always', // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
	rangeStart: 0, // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
	rangeEnd: Infinity,
	requirePragma: false, // 指定要使用的解析器，不需要写文件开头的 @prettier
	insertPragma: false, // 不需要自动在文件开头插入 @prettier
	proseWrap: 'preserve', // 使用默认的折行标准 always\never\preserve
	htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空格敏感度 css\strict\ignore
	vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进
	endOfLine: 'lf' // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
}
