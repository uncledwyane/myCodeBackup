const express = require('express')
const router = express()
const db = require('./db')

router.get('/students', (req, res) => {
    db.find((data) => {
        let students = data
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
    
    // 调用封装的db里的save方法， 传入填入的数据进行保存
    db.save(student, (err) => {
        console.log('Something Wrong' + err);
    }, (data) => {
    })
    // 重定向到首页 
    res.redirect('/students')
})

router.get('/students/edit', (req, res) => {
    // 直接通过body-parser获取的id有引号，用replace消除
    let id = req.query.id.replace('"', '').replace('"', '')
    // 根据 id 查找到数据，然后传递到渲染的编辑页面
    db.findById(id, (err) => {
        return console.log(err);
    }, (data) => {
        let student = data
        res.render('edit_student.html', {
            student: student
        })
    })
})

router.post('/students/edit', (req, res) => {
    // 获取更新的数据内容
    let student = req.body
    // 获取 id
    let id = req.body.id
    // 调用封装的db数据库操作里面的modify方法
    // 第一个参数为 要修改的对象的id，第二个为要修改后的数据，有错误就用回调函数处理
    db.modify(id, student, (err) => {
        console.log("Update Error!");
    })
    // 重定向到首页
    res.redirect('/students')
})

router.get('/students/delete', (req, res) => {
    // 直接通过body-parser获取的id有引号，用replace消除
    let id = req.query.id.replace('"', '').replace('"', '')
    // 使用封装的db里的delete
    db.delete(id, (err) => {
        return console.log('Delete Error!');
    })
    res.redirect('/students')
})

module.exports = router