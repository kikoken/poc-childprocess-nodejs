const fs = require('fs');
const RUTA_FOLDER = './docs';

const results =  [...fs.readdirSync(RUTA_FOLDER)];
console.log(`FILES: found ${results.length} files`)

module.exports = results;