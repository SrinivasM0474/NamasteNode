const http = require("node:http");
// console.log(http);
const server = http.createServer(function (req, res) {
  //it will close the connection and send the reponse
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Hello world!!!");
});

server.listen(4444);
