const fs = require("fs");
const cryto = require("crypto");

const start = Date.now();
//work in mac or linux
//process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() =>  console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
    console.log("I/O finished");
    console.log("--------------------");
    setTimeout(() =>  console.log("Timer 2 finished"), 0);
    setTimeout(() =>  console.log("Timer 3 finished"), 3000);
    setImmediate(() => console.log("Immediate 2 finished"), 0);

    process.nextTick(() => console.log("nextTick"));

    cryto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, "Password encrypt");
    cryto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start, "Password encrypt");
    cryto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypt");
    });
    cryto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypt");
    });
});

console.log("Hello fron top level code");
