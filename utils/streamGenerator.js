const worker = require('../workers/worker');

function* streamGenerator(files) {
    for (let i = 0; i < files.length; i++) 
        yield worker(files[i]);
}

module.exports = streamGenerator;