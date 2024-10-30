import { Tile } from "./Tile";

export class Square {
  public isOccupied: boolean = false;
  public tile: Tile | null = null;

  public AddTile(tile: Tile) {
    this.isOccupied = true;
    this.tile = tile;
  }
}
