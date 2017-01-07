const apiserver = require('./apiserver');
const domate_config = require('./config');

const server = new apiserver(domate_config);

console.log(server);

server.run();
