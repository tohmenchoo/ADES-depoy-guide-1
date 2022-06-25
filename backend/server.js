var Graph = require("./controller/graph");

var port = 8081;
var hostname = "localhost";

Graph.listen(port, hostname, () => {
  console.log(`Server ready and accessible at http://${hostname}:${port}`);
});

