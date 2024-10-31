import { Board } from "./Board";
import * as Tiles from "./Tiles";
export class Game {
    constructor() {
        this.sizeX = 6;
        this.sizeY = 6;
        this.nTilesBlocked = 7;
        this.board = new Board(this.sizeX, this.sizeY);
        this.tiles = [
            Tiles.SingleSquare(),
            Tiles.DoubleLine(),
            Tiles.TripleLine(),
            Tiles.QuadLine(),
            Tiles.Corner(),
            Tiles.Square(),
            Tiles.SBlock(),
            Tiles.TBlock(),
            Tiles.LBlock(),
        ];
        this.AddBlockers();
    }
    AddBlockers() {
        let nBlocksRemaining = this.nTilesBlocked;
        let x;
        let y;
        while (nBlocksRemaining > 0) {
            x = getRandomInt(0, this.sizeX);
            y = getRandomInt(0, this.sizeY);
            if (!this.board.GetSquare(x, y).isOccupied) {
                this.board.GetSquare(x, y).isOccupied = true;
                nBlocksRemaining--;
            }
        }
    }
    IsBoardFull() {
        let allTilesOccupied = this.board.squares.every((row) => row.every((square) => square.isOccupied));
        return allTilesOccupied ? true : false;
    }
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
