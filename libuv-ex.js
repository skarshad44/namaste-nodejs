const fs = require("node:fs");

fs.readFile("readFile.txt","utf-8",(e,data)=> {
    console.log(data);
});

setImmediate(()=> console.log("setImmediate"));
setTimeout(()=> console.log("setTimeout"));
console.log("libv-ex");
Promise.resolve("resolved promise").then(console.log);


//refer libuv working cycle for understanding its printing patter - libuv-eventloop-cycle.png