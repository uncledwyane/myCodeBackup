const fs = require('fs')

let promise = new Promise((reject, resolve) => {
    fs.readFile('./data.txt', 'utf8', (err, data) => {
        if(err)
            reject(err)
        resolve(data)
    })
})

promise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})