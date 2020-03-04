const message: string = 'hello world';
console.log(message);

let count = 0;
count += 1;
// 문자열 type을 넣으면 error 발생!
// count = 'aaa';

const done: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ['hello', 'world'];

// messages.push(1); // error type

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null; // number or null

let color: 'red' | 'orange' | 'yello' = 'red';

const sum = (x: number, y:number):number=>{
    return x+y;
};

sum(1,2);

const sumArray= (numbers: number[]): number => {
    return numbers.reduce((acc, current) => acc + current, 0)
};

const total = sumArray([1,2,3,4,5]);

const returnNothing = ():void => {
    console.log('I am ust saying hello world');
};

interface Shape {
    getArea(): number;
}

class Circle implements Shape{
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea(){
        return this.radius *this.radius * Math.PI;
    }
}

class Rectangle implements Shape{
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape =>{
    console.log(shape.getArea());
});

// interface Person {
//     name: string;
//     age?: number;
// }
//
// interface Developer extends Person{
//     skills: string[];
// }
//
// const person: Person = {
//     name: '사람',
//     age:20
// };
//
// const expert: Developer = {
//     name: '개발',
//     skills: ['js', 'react']
// };

type Person = {
    name: string;
    age?: number;
}

type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '사람',
    age:20
};

const expert: Developer = {
    name: '개발',
    skills: ['js', 'react']
};

type People = Person[];
const people: People = [person, expert];

// function merge(a:any, b: any): any{
//     return{
//         ...a,
//         ...b
//     }
// }
// const merged = merge({foo:1}, {bar:1});

// Generics 사용
function merge<A,B>(a: A, b: B): A&B {
    return {
        ...a,
        ...b
    }
}

const merged = merge({foo:1}, {bar:1});

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a','b','c']
};

