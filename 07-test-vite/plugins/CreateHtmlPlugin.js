module.exports = options => {
	return {
		// transformIndexHtml: (html, ctx) => {
		// 	// 这种写法也可以
		// 	return html.replace(/<%= title %>/g, options.inject.data.title)
		// }
		transformIndexHtml: {
			enforce: 'pre',
			transform: (html, ctx) => html.replace(/<%= title %>/g, options.inject.data.title)
		}
	}
}
