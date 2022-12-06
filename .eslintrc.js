module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	globals: {
		TAny: true,
		TDict: true,
		TFunc: true,
		THttpResponse: true,
		getApp: true,
    __wxConfig: true,
    uni: true,
		defineProps: 'readonly',
		defineEmits: 'readonly',
		defineExpose: 'readonly',
		withDefaults: 'readonly'
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	extends: ['plugin:vue/vue3-essential', 'plugin:vue/essential', 'eslint:recommended'],
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		'@type-eslint/ban-ts-ignore': 'off', // 配置禁用 @ts-ignore 注释
		'@type-eslint/explicit-function-return-type': 'off', // 要求函数和类方法上显式返回类型
		'@type-eslint/no-explicit-any': 'off', // 不允许any类型
		'@typescript-eslint/no-explicit-any': 'warn', // any不能乱用
		'@type-eslint/no-var-requires': 'off', // 禁止require语句，import语句除外
		'@type-eslint/no-empty-function': 'off', // 禁止空函数
		'@type-eslint/no-use-before-define': 'off', // 禁止在定义变量之前使用变量
		'@type-eslint/ban-ts-comment': 'off', // 禁止@ts-<指令>注释或要求指令后面有描述。
		'@type-eslint/ban-types': 'off', // 禁止某些类型
		'@type-eslint/no-non-null-assertion': 'off', // 不允许使用非空断言!后缀运算符
		'@type-eslint/explicit-module-boundary-types': 'off', // 对导出函数和类的公共类方法要求显式的返回和参数类型
		'vue/no-v-for-template-key': 0, // 不允许template上有key
		semi: ['error', 'never'], // 使用分号
		'comma-dangle': [
			// 语句后面是否使用逗号
			'error',
			{
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'vue/custom-event-name-casing': 'off', // 为自定义事件名强制执行特定的大小写
		'vue/attributes-order': 'off', // 强制属性的顺序
		'vue/one-component-per-file': 'off', // 强制每个组件应该在它自己的文件中
		'vue/html-closing-bracket-newline': 'off', // 要求或禁止在标记的右括号前换行
		'vue/max-attributes-per-line': 'off', // 强制规定每行的最大属性数
		'vue/multiline-html-element-content-newline': 'off', // 要求在多行元素的内容之前和之后使用换行符
		'vue/singleline-html-element-content-newline': 'off', // 要求在单行元素的内容前后使用换行符
		'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制实施属性命名样式
		'vue/html-self-closing': 'off', // 强制实施自动关闭样式
		'vue/no-multiple-template-root': 'off', // template中只允许模板里存在一个根节点
		'vue/require-default-prop': 'off', // props需要默认值
		'vue/no-v-model-argument': 'off', // 检查自定义组件上是否没有参数
		'vue/no-arrow-functions-in-watch': 'off', // 禁止使用箭头函数定义watch
		'vue/no-template-key': 'off', // 不允许template上有key
		'vue/no-v-html': 'off', // 禁止使用 V-HTML 来防止 XSS 攻击
		'vue/comment-directive': 'off', // 支持注释指令
		'vue/no-parsing-error': 'off', // 报告语法错误
		'vue/no-deprecated-v-on-native-modifier': 'off', // 弃用修饰符 ondirective @xxx.native
		'vue/multi-word-component-names': 'off', // 组件名称始终是多字的
		'no-useless-escape': 'off', // 禁用不必要的转义
		'no-sparse-arrays': 'off', // 禁用稀疏数组
		'no-prototype-builtins': 'off', // 禁止直接使用Object.prototypes 的内置属性
		'no-constant-condition': 'off', // 禁止在条件中使用常量表达式
		'no-use-before-define': 'off', // 不允许在变量定义之前使用它们
		'no-restricted-globals': 'off', // 禁用特定的全局变量
		'no-restricted-syntax': 'off', // 禁止使用特定的语法
		'generator-star-spacing': 'off', // 强制 generator 函数中 * 号周围有空格
		'no-unreachable': 'off', // 禁止在return、throw、continue 和 break语句之后出现不可达代码
		'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], // 禁止出现未使用过的变量
		'no-case-declarations': 'off', // 不允许在 case 子句中使用词法声明
		'no-console': 'off', // 禁用console
		'arrow-parens': 'off', // 箭头函数一个参数可以不要括号
		'no-eq-null': 2, // 禁止对null使用==或!=运算符
		quotes: [1, 'single'], // 引号类型
		'prefer-const': 0, // 首选const
		eqeqeq: 2, // 必须使用全等
		'default-case': 2, // switch语句最后必须有default
		'no-var': 0, // 禁用var，用let和const代替
		'no-trailing-spaces': 1 // 一行结束后面不要有空格
	}
}
