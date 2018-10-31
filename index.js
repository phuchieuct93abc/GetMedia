const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var proxy = require('http-proxy-middleware');

express()
  .use(express.static(path.join(__dirname, '')))
  .use('/zingmp3', proxy({target: 'https://mp3.zing.vn', changeOrigin: true, pathRewrite: {
    '^/zingmp3' : '/',     // rewrite path
},}))
  .get('/', (req, res) => res.render('index'))
  .get('/getMedia', (req, res) => {
    
    res.send("<html></html>")



  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
