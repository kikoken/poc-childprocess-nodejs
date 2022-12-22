const files = require('./utils/listFiles');
const streamGenerator = require('./utils/streamGenerator');

const main = async () => {
    const stream = await Promise.all([...streamGenerator(files)]);
    console.log(stream);
}

main();