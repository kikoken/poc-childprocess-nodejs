const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const RUTA_FOLDER = '../docs';

process.on('message', (fileName) => {
    const data = [];
    const stream = fs.createReadStream(path.join(__dirname, RUTA_FOLDER, fileName), 'utf8')
    stream
        .pipe(csv())
        .on('data', chunk => {
            data.push(chunk) ;
        })
        .on('error', err => { reject(err) })
        .on('end', () => {
            const msg = `${fileName} has been processed, ${data.length} rows` 
            console(msg)
        })
})