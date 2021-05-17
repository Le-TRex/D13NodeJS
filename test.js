const sayHello = ()=>{
    console.log("hello")
}

const intervalId = setInterval(sayHello, 1000);

setTimeout(()=>{
    clearInterval(intervalId)
},3500);

/* global est un objet fourni par Node équivalent à l'objet window sur le navigateur */
console.log(global);
