interface Shape{
    getArea(): number;
}

class Circle implements Shape{
    constructor(public radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(shape => {
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
//     name: "이재준",
//     age: 23
// };
//
// const developer:Developer = {
//     name: "Devrappers",
//     age: 23,
//     skills: ["React", "ReactNative"]
// };
//
// const people: Person[] = [person, developer];

type Person = {
    name: string;
    age?: number;
};

type Developer = Person&{
    skills: string[];
}

const person: Person = {
    name: "이재준",
    age: 23
};

const developer:Developer = {
    name: "Devrappers",
    age: 23,
    skills: ["React", "ReactNative"]
};

// 이렇게 하면 결과가 깨진다 어느type인지 알수 없으니
// function merge(a: any, b: any): any{
//     return {
//         ...a,
//         ...b
//     };
// }
//
// const merged = merge({foo:1},{bar:1});
function merge<A,B>(a: A, b: B): A&B{
    return{
        ...a,
        ...b
    }
}

const merged = merge({ foo:1},{bar:1});

function wrap<T>(param: T){
    return {
        param
    }
}
const wrapped = wrap(10);

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a','b','c']
};