const path = require('path');

const city = require('./static/mock/city.json')
const detail = require('./static/mock/detail.json')
const index = require('./static/mock/index.json')

console.log(detail);

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles',resolve('src/assets/styles'))
      .set('common',resolve('src/common'))
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  },
  devServer: {
    // 这里的app其实就相当于express()
    // mock数据
    before(app) {
      app.get('/api/index', function (req, res) {
          res.json({
            errno: 0,
            data: index
          })
        }),
        app.get('/api/city', function (req, res) {
          res.json({
            errno: 0,
            data: city
          })
        }),
        app.get('/api/detail', function (req, res) {
          res.json({
            errno: 0,
            data: detail
          })
        })
    }
  }
};
