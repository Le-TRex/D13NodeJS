const http = require('http');

const server = http.createServer((request, response) => {
  console.log("request received");
  /* .setHeader = indiquer le type de réponse qu'on envoie au navigateur */
  response.setHeader("Content-Type", "text/plain");
  response.write("Hellooooow !");
  response.end();
});

server.listen(3000,'localhost', () => {
  console.log("Hey ! Server is listenning on port 3000 !")
})

