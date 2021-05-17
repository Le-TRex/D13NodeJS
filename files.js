const fs = require("fs");

/* fs.readFile("./docs/file1.txt", (err, data)=> {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
}) */


fs.writeFile("./docs/file1.txt", "Nouveau texte", () => {
    console.log("File written");
});

/* const directory = "./newDirectory"

if(!fs.existsSync(directory)) {
    fs.mkdir(directory, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Dossier créé");
        }
    })
} else {
    fs.rmdir(directory, () => {
        console.log("Directory deleted")
    })
} */

/* fs.unlink("./docs/file1.txt", (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("file deleted");
    }
}) */
