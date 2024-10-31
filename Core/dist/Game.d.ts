import { Board } from "./Board";
import { Tile } from "./Tile";
export declare class Game {
    private sizeX;
    private sizeY;
    private nTilesBlocked;
    tiles: Tile[];
    board: Board;
    constructor();
    AddBlockers(): void;
    IsBoardFull(): boolean;
}
