const http = require('http');

const server = http.createServer((request, response) => {
  console.log("request received");
  console.log(request.url, request.method);
  /* .setHeader = indiquer le type de réponse qu'on envoie au navigateur */
  response.setHeader("Content-Type", "text/html");
  response.write("<p>Hellooooow ! </p>");
  response.write("Je suis le MAITRE DU MOOOOOOOOONDE !!!! ");
  response.end();
});

server.listen(3000,'localhost', () => {
  console.log("Hey ! Server is listenning on port 3000 !")
})

