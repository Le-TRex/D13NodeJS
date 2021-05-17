const http = require('http');
const fs = require('fs');

const home = "./views/home.html";
const about = "./views/about.html";

const server = http.createServer((request, response) => {
  console.log("request received");
  console.log(request.url, request.method);
  /* .setHeader = indiquer le type de réponse qu'on envoie au navigateur */
  response.setHeader("Content-Type", "text/html");

  switch (request.url) {
    case "/" :
      fs.readFile(home, (error, data)=> {
        if(error){
            console.log(error);
        }else{
          response.statusCode = 200;
          response.write(data.toString());
          response.end();
        }
      });
      break;
    
    case "/about":
      fs.readFile(about, (error, data)=> {
        if(error){
            console.log(error);
        }else{
          response.statusCode = 200;
          response.write(data.toString());
          response.end();
        }
      });
      break;

    default:
      response.statusCode = 404;
      response.write("<p>Not Found</p>");
      response.end();
      break;
  }
});

server.listen(3000,'localhost', () => {
  console.log("Hey ! Server is listenning on port 3000 !")
})

