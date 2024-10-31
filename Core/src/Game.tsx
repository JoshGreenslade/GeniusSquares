import { Board } from "./Board";
import { Tile } from "./Tile";
import * as Tiles from "./Tiles";

export class Game {
  private sizeX: number = 6;
  private sizeY: number = 6;
  private nTilesBlocked: number = 7;

  public tiles: Tile[];
  public board: Board;

  constructor() {
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

  public AddBlockers(): void {
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

  public IsBoardFull(): boolean {
    let allTilesOccupied = this.board.squares.every((row) =>
      row.every((square) => square.isOccupied)
    );
    return allTilesOccupied ? true : false;
  }
}

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
