const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('html', require('express-art-template'))
app.use('/public', express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(router)

app.listen(3000, () => {
    console.log('服务器运行在localhost:3000.......')
})

