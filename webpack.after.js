var path = require('path')
var fs = require('fs-extra')

var buildDir = path.resolve(__dirname, 'build/')
fs.copySync('./index.html', buildDir + '/index.html')