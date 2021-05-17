const fs = require('fs');

const readStream = fs.createReadStream("./docs/file1.txt", {encoding: 'utf8'});

/* fs.createReadStream(PATH, OBJET) ==> Iic l'objet sert à définir le type d'encodage */


/* chunk = morceau de data */
readStream.on('data', chunk => {
    console.log(chunk);
})