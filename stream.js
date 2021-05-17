const fs = require('fs');

const readStream = fs.createReadStream("./docs/file1.txt", {encoding: 'utf8'});

/* fs.createReadStream(PATH, OBJET) ==> Iic l'objet sert à définir le type d'encodage */


/* chunk = morceau de data */
readStream.on('data', chunk => {
    console.log(chunk);
});

const writeStream = fs.createWriteStream("./docs/file2.txt");

const chunk = "test"
writeStream.write(chunk, (err) => {
    console.log("message écrit")
})