/*  */
const http = require('http');

exports = module.exports = function(config) {
  this.config = config;
  this.httpserver = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write("Hello domate API.\n")
    res.write(req.method+"\n")
    res.write(JSON.stringify(req.headers)+"\n");
    res.end();
  });

  this.run = function (){
    const hostname = this.config.http.hostname;
    const port = this.config.http.port;
    this.httpserver.listen(port, hostname, () => {
      console.log(`Domate API server running at http://${hostname}:${port}/`);
    });
  };
};
