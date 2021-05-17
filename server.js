const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log("request received");
  console.log(request.url, request.method);
  /* .setHeader = indiquer le type de réponse qu'on envoie au navigateur */
  response.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (request.url) {
    case "/" :
      path += "home.html";
      response.statusCode = 200;
      break;
    
    case "/about":
        path += "about.html";
        response.statusCode = 200;
      break;

    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }
  fs.readFile(path, (error, data) => {
    if(error){
      console.log(error);
    }else{
      response.write(data.toString());
    }
    response.end();
  })
});

server.listen(3000,'localhost', () => {
  console.log("Hey ! Server is listenning on port 3000 !")
})

