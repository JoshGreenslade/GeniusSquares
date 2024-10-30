import { Square } from "./Square";
import { Tile } from "./Tile";
export declare class Board {
    private sizeX;
    private sizeY;
    squares: Square[][];
    constructor(sizeX: number, sizeY: number);
    private createSquares;
    private IsTileOccupied;
    private CanTileBePlacedAtPos;
    PlaceTile(tile: Tile, pos: number[]): void;
    GetSquare(x: number, y: number): Square;
    PrintBoard(): void;
}
