"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 최신브라우저만 사용할경우 : tsc hello.ts --target es6
// es5에서 promise를 이용할 경우 : tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom
var hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("1 sec"); }, 1000);
});
timeoutPromise.then(console.log);
const util_1 = require("./util");
const value = util_1.default(1, 2);
console.log(value);
