//var pxtorem = require('postcss-pxtorem');
//var options = {
//  rootValue: 75,
//  unitPrecision: 5,
//  propList: ['*','!border'],
//  selectorBlackList: [],
//  replace: true,
//  mediaQuery: false,
//  minPixelValue: 2
//};
module.exports = {
	plugins:[
		require('autoprefixer'),
		require('precss'),
		require('postcss-flexible')({remUnit: 75})
	]
}
