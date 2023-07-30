const Cell = require("./Cell.js");
class Board {
    constructor() {
        this.cells = [
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),
            new Cell(),

        ]
    }
    isEmpty(cellNumber) {
        return this.cells[cellNumber].isEmpty()
    }
    printBoard() {
        console.log(this.cells);
    }   
    analyse() {

        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.cells[a].mark === this.cells[b].mark && this.cells[b].mark === this.cells[c].mark && (this.cells[a].mark == "X"||this.cells[a].mark=="O")) {
                
                return [this.cells[a].mark, "Win"];
            }
            
        }
        let isDraw=true
        for (let index = 0; index < this.cells.length; index++) {
            if (this.cells[index].mark=="-") {
               
                isDraw=false
                return ["", ""]
                
            }    
        }
        if (isDraw==true) {
            return ["","Draw"]
        }

    }
}
module.exports = Board


