const fs = require('fs')
const db_url = './students.json'

/**
 * 保存添加学生数据到json文件里
 * 封装save方法，使用回调函数处理错误
 * 两个参数 student为传入的新增学生对象
 * callback为回调函数，处理错误
 */
exports.save = (student,callback) => {
    // 读取文件内容
    fs.readFile(db_url, 'utf8', (err, data) => {
        // 如果有错误，使用回调函数处理     
        if(err)
            return callback(err)
        // 没有错误就把获取的数据转换成字符串并赋值给students
        let students = JSON.parse(data).students
        if(students.length === 0){
            student.id = 1
            students.push(student)
            let newStudents = JSON.stringify({
                students: students
            })
            // 写入文件，如果有错，就是用回调函数处理
            fs.writeFile(db_url, newStudents, (err) => {
                // 如果有错误，使用回调函数处理
                if(err)
                    return callback(err)
                // 没有错误，使回调函数参数为空
                callback(null)
            })
            return
        }
        // 添加 id 
        student.id = students[students.length - 1].id + 1
        // 将新增的学生添加到从文件获取的数据中
        students.push(student)
        // 将 包含新增学生的数据格式化为JSON格式，并传递给newStudents
        let newStudents = JSON.stringify({
            students: students
        })
        // 写入文件，如果有错，就是用回调函数处理
        fs.writeFile(db_url, newStudents, (err) => {
            // 如果有错误，使用回调函数处理
            if(err)
                return callback(err)
            // 没有错误，使回调函数参数为空
            callback(null)
        })
    })
}

/**
 * 保存编辑学生方法
 * 使用 学生id 为关键字进行编辑
 */

exports.editById = (student, callback) => {
    fs.readFile('./students.json', (err, data) => {
        if(err) 
            return callback(err)
        let students = JSON.parse(data).students

        student.id = parseInt(student.id)

        let stu = students.find((item) => {
            return item.id === student.id
        })
        
        for(let key in student){
            stu[key] = student[key]
        }
        // 将 包含新增学生的数据格式化为JSON格式，并传递给newStudents
        let newStudents = JSON.stringify({
            students: students
        })
        // 写入文件，如果有错，就是用回调函数处理
        fs.writeFile(db_url, newStudents, (err) => {
            // 如果有错误，使用回调函数处理
            if(err)
                return callback(err)
            // 没有错误，使回调函数参数为空
            callback(null)
        })
    })
}
/**
 * 根据 id 查询学生信息
 */
exports.findById = (id, callback) => {
    fs.readFile('./students.json', (err, data) => {
        if(err)
            return console.log('编辑失败');
        let students = JSON.parse(data).students
        let student = students.find((item) => {
            return item.id === parseInt(id)
        })
        callback(null, student)
    })
}

/**
 * 根据 id 删除
 */

exports.deleteById = (id, callback) => {
    fs.readFile('./students.json', (err, data) => {
        if(err) 
            return callback(err)
        let students = JSON.parse(data).students

        let index = students.findIndex((item) => {
            return item.id === id
        })
        
        students.splice(index, 1)

        // 将 包含新增学生的数据格式化为JSON格式，并传递给newStudents
        let newStudents = JSON.stringify({
            students: students
        })
        // 写入文件，如果有错，就是用回调函数处理
        fs.writeFile(db_url, newStudents, (err) => {
            // 如果有错误，使用回调函数处理
            if(err)
                return callback(err)
            // 没有错误，使回调函数参数为空
            callback(null)
        })
    })
}