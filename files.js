const fs = require("fs");

// fs.readFile("./docs/file1.txt", (err, data)=> {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// })


fs.writeFile("./docs/file1.txt", "Nouveau texte", () => {
    console.log("File written");
});

fs.mkdir("./newDirectory", () => {
    console.log("Dossier créé");
})