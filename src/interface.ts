interface TV{
    turnOn():boolean;
    turnOff():void;
}

const myTv: TV = {
    turnOn(): boolean {
        return true;
    },
    turnOff(): void {

    }
};

function tryTurnOn(tv: TV){
    tv.turnOn();
}

tryTurnOn(myTv);

interface Cell {
    row: number;
    col: number;
    piece?: Piece;
}

interface SignUp{
    email: string;
    id: string;
    password: string;
}

function ajaxSignup(data: SignUp){

}

ajaxSignup({
    email: 'aaa@naver.com',
    id: 'aaa',
    password: '12345'
});

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for (let row = 0; row< 4; row++){
        for(let col = 0; col<3; col++){
            cells.push({
                row,
                col
            })
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from:Cell, to: Cell){
        return true;
    }
};
