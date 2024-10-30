import { Square } from "./Square";
import { Tile } from "./Tile";

export class Board {
  private sizeX: number = 8;
  private sizeY: number = 8;
  public squares: Square[][];

  constructor(sizeX: number, sizeY: number) {
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.squares = this.createSquares();
  }

  private createSquares(): Square[][] {
    return Array.from({ length: this.sizeX }, () =>
      Array.from({ length: this.sizeY }, () => new Square())
    );
  }

  private IsTileOccupied(pos: number[]) {
    return this.squares[pos[0]][pos[1]].isOccupied;
  }

  private CanTileBePlacedAtPos(tile: Tile, pos: number[]) {
    for (const offset of tile.shape) {
      const xPos = pos[0] + offset[0];
      const yPos = pos[1] + offset[1];
      if (
        xPos >= this.sizeX ||
        xPos < 0 ||
        yPos >= this.sizeY ||
        yPos < 0 ||
        this.IsTileOccupied([xPos, yPos])
      ) {
        return false;
      }
    }
    return true;
  }

  public PlaceTile(tile: Tile, pos: number[]) {
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

  public GetSquare(x: number, y: number): Square {
    return this.squares[x][y];
  }

  public PrintBoard(): void {
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
