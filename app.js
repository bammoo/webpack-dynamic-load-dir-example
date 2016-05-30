console.log('log from app.js')
var name = 'aaa'
var condition = location.hash === '#test'
if(condition) {
  require.ensure([], function(require) {
    var dynamicFile = require('./dynamic-files/' + name + '.js')
    console.log(dynamicFile)
  })
}
