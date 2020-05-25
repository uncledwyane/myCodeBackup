// 引入 mongoose 
const mongoose = require('mongoose')
// 链接数据库，加入参数
mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true ,useUnifiedTopology: true})
// 创建 Schema 图表
const Schema = mongoose.Schema
// 创建 Student 图表并且发布为模型
const Student = mongoose.model('Student', new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        //枚举，只能是0,1
        enum: ['男', '女'],
        default: '男'
    },
    age: {
        type: Number,
        required: true
    },
    hobby: {
        type: String,
        required: true
    }
}))
/**
 * 查找数据库中所有数据，用回调函数 handleData 来处理得到的数据
 */
exports.find = (handleData) => {
    Student.find((err, data) => {
        if(err) return console.log(err);
        handleData(data)
    })
}
/**
 * 保存添加的新数据
 */
exports.save = (newData, callback, handleShow) => {
    new Student(newData).save((err, ret) => {
        if(err) return callback(err)
        handleShow(ret)
    })
}
/**
 * 通过ID查找数据
 */
exports.findById = (id, handleError, handleData) => {
    Student.findById(id, (err, data) => {
        if(err) return handleError(err)
        handleData(data)
    })
}
/**
 * 通过 Id 删除一条数据
 */
exports.delete = (id, handleError) => {
    Student.deleteOne({_id: id}, (err) => {
        if(err) handleError(err)
    })
}
/**
 * 通过 id 来修改查找到的数据
 */
exports.modify = (id, newData, callback) => {
    Student.findByIdAndUpdate(id, newData, (err) => {
        if(err) return callback(err)
    })
}