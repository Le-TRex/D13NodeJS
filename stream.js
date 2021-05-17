const fs = require('fs');

const readStream = fs.createReadStream("./docs/file1.txt", {encoding: 'utf8'});
/* fs.createReadStream(PATH, OBJET) ==> Iic l'objet sert à définir le type d'encodage */

const writeStream = fs.createWriteStream("./docs/file2.txt");


/* chunk = morceau de data */
readStream.on('data', chunk => {
    writeStream.write(chunk, (err) => {
        console.log("message écrit")
    })
});