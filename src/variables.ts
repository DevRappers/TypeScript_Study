var scope1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer() {
    if(true){
        // number type으로 지정.
        let score:number;
        const score2 = 100;
        score = 30;
        console.log(score);
        console.log(score2);
    }
}

outer();