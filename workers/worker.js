const { fork } = require('child_process');
const path = require('path');


const worker = (fileName) => new Promise((resolve, reject) => {
    console.log(`[${fileName}] Forking a new subprocess....`);
    const child = fork(path.join(__dirname, '../utils','readfile.js'));
    child.send(fileName)
    
    child.on('error', (error) => {
        reject(error);
    })
    .on('message', (msg) => {
        console.log(msg);
    })
    .on('exit', (code) => {
        if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
        }
        resolve(`Complete processing ${fileName}`);
    });
});

module.exports = worker;