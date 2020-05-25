const fs = require('fs')
function getContent(url, callback){
    fs.readFile(url, (err, data) => {
        if(err)
            return console.log('ReadFIle Error');
        callback(data)
    })
}

getContent('./students.json', (data) => {
    let content = JSON.parse(data).students
    console.log(content);
})