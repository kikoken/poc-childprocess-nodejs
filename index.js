const files = require('../utils/listfiles');
const streamGenerator = require('../scripts/streamGenerator');

const main = async () => {
    const stream = await Promise.all([...streamGenerator()]);
    console.log(stream);
}

main();