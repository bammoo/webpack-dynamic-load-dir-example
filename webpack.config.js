var path = require('path')
var webpack = require('webpack')
var fs = require('fs-extra')

var buildDir = path.resolve(__dirname, 'build/')
fs.emptyDir(buildDir)

var config = {}
config.entry = ["./app.js"]
config.output = {
  filename: "build.js",
	// filename: "build.[hash].js"
  path: buildDir
}

module.exports = config
