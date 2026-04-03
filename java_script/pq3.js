const id = setInterval(() => {
    console.log("hello world .........")
}, 2000);


setTimeout(() => {
    clearInterval(id);
    console.log("set interval ran");
}, 10000);