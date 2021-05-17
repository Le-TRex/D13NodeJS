const sayHello= ()=>{
    console.log("hello")
}

const intervalId = setInterval(sayHello, 1000);

setTimeout(()=>{
    clearInterval(intervalId)
},3500);