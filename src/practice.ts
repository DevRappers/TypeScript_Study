// : type 지정
const message: string = 'hello world';
console.log(message);

// type지정을 안할때는 할당된 값으로 type을 지정함
let count = 0;
count += 1;

const done: boolean = true;

// 배열 선언시
const numbers: number[] = [ 1, 2, 3 ];
const messages: string[] = [ 'hello', 'world' ];

messages.push();

// string이거나 undefined이다.
let mightBeUndefined: string | undefined = undefined;
// number또는 null이다.
let nullableNumber: number | null = null;

// 자신이 타입을 지정해줄때
let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';

// 함수 만들기 ( 기본 함수의 파라미터의 type은 any type임) function뒤에 :로 반환타입 설정이 가능함.
function sum(x: number, y: number): number {
	return x + y;
}

const result = sum(1, 2);

function sumArray(numbers: number[]): number {
	return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([ 1, 2, 3, 4, 5 ]);
console.log(total);

function returnStringOrNumber(): string | number {
	return 4;
}
