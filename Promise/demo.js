const fs = require('fs')

let p1 = new Promise((reject, resolve) => {
    fs.readFile('./a.txt', 'utf8', (err, data) => {
        if(err)
            reject(err)
        resolve(data)
    })
})
let p2 = new Promise((reject, resolve) => {
    fs.readFile('./b.txt', 'utf8', (err, data) => {
        if(err)
            reject(err)
        resolve(data)
    })
})
let p3 = new Promise((reject, resolve) => {
    fs.readFile('./c.txt', 'utf8', (err, data) => {
        if(err)
            reject(err)
        resolve(data)
    })
})


p1
    .then((data) => {
        console.log('A');
        return p2
    }, (err) => {
        console.log(err);
    })
    .then((data) => {
        console.log('B');
        return p3
    }, (err) => {
        console.log(err);
    })
    .then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    })