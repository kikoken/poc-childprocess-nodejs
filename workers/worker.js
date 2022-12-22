const { fork } = require('child_process');


const worker = (fileName) => new Promise((resolve, reject) => {
    console.log("Forking a new subprocess....");
    const child = fork('../utils/readFile.js');
    child.send(fileName)
    
    child.on('error', (error) => {
        reject(error);
    })
    .on('exit', (code) => {
        if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
        }

        resolve(`Complete processing ${fileName}`);
    });
});

module.exports = worker;