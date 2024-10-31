import { Square } from "./Square";
export class Board {
    constructor(sizeX, sizeY) {
        this.sizeX = 8;
        this.sizeY = 8;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.squares = this.createSquares();
    }
    createSquares() {
        return Array.from({ length: this.sizeX }, () => Array.from({ length: this.sizeY }, () => new Square()));
    }
    IsTileOccupied(pos) {
        return this.squares[pos[0]][pos[1]].isOccupied;
    }
    CanTileBePlacedAtPos(tile, pos) {
        for (const offset of tile.shape) {
            const xPos = pos[0] + offset[0];
            const yPos = pos[1] + offset[1];
            if (xPos >= this.sizeX ||
                xPos < 0 ||
                yPos >= this.sizeY ||
                yPos < 0 ||
                this.IsTileOccupied([xPos, yPos])) {
                return false;
            }
        }
        return true;
    }
    PlaceTile(tile, pos) {
        if (tile.isPlaced) {
            console.log(`Tile ${tile} is already placed`);
            return;
        }
        if (!this.CanTileBePlacedAtPos(tile, pos)) {
            console.log(`Tile ${tile} cannot be placed at position ${pos}`);
            return;
        }
        tile.shape.forEach((offset) => {
            const xPos = pos[0] + offset[0];
            const yPos = pos[1] + offset[1];
            console.log(xPos, yPos);
            this.squares[xPos][yPos].AddTile(tile);
            tile.isPlaced = true;
        });
    }
    GetSquare(x, y) {
        return this.squares[x][y];
    }
    PrintBoard() {
        let line = "";
        for (let i = 0; i < this.sizeY; i++) {
            line = "";
            for (let j = 0; j < this.sizeX; j++) {
                line += ` ${this.squares[j][i].isOccupied ? "X" : "O"}`;
            }
            console.log(line);
        }
    }
}
