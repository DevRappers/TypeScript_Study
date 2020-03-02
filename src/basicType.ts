let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 10;
stringValue = "hello";
stringValue = 'hello';
stringValue = `hello${numValue}`;

booleanValue = true;
// undefined or null 상위 type이기 때문에 어떠한 type이든 할당가능.
undefinedValue = undefined;
undefinedValue = null;

objValue = {name: "devrappers", age:23};

symbolValue = Symbol();

let nameList: string[];
nameList = ["aa", "bb"];
nameList.push("cc");

let user1: { name: string, score: number };
user1 = {
    name: 'jay',
    score: 30
};

let tuple2: [number, string];

tuple2 = [1, "aa"];