const fs = require('fs')

let pReadFile = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', (err, data) => {
            if(err)
                reject(err)
            else
                resolve(data)
        })
    })
}

pReadFile('./a.txt')
    .then((data) => {
        console.log(data);
        return pReadFile('./b.txt')
    })
    .then((data) => {
        console.log(data);
        return pReadFile('./c.txt')
    })
    .then((data) => {
        console.log(data);
    })
