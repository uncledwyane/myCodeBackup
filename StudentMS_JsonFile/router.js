const express = require('express')
const router = express()
const fs = require('fs')
const Action = require('./action')

router.get('/students', (req, res) => {
    fs.readFile('./students.json', (err, data) => {
        let students = JSON.parse(data).students
        if(err)
            return this.response.status(500).send('oops! Something Crashed!!!')
        
        res.render('index.html', {
            students: students
        })
    })
})

router.get('/students/new', (req, res) => {
    res.render('add_student.html')
})
    
router.post('/students/new', (req, res) => {
    // 使用 body-parser 获取的请求数据给student
    let student = req.body
    // 使用封装的保存学生的 save 方法，两个参数，一个是学生实参，一个为错误，错误用用回调函数处理
    Action.save(student, (err) => {
        if(err)
            res.status(500).send('Error')
        // 重定向到首页
        res.redirect('/students')
    })
})

router.get('/students/edit', (req, res) => {
    let reqId = parseInt(req.query.id)
    Action.findById(reqId, (err, student) => {
        if(err)
            return res.status(500).send('Oops! Something Error')
        res.render('edit_student.html', {
            student: student
        })
    })
})

router.post('/students/edit', (req, res) => {
    let student = req.body
    Action.editById(student, (err) => {
        if(err)
            return res.status(500).send('Oops! Something Error')
        res.redirect('/students')
    })
})

router.get('/students/delete', (req, res) => {
    let id = parseInt(req.query.id)
    Action.deleteById(id, (err) => {
        if(err)
            return res.status(500).send('Oops! Something Error')
        res.redirect('/students')
    })
})
module.exports = router