import { Tile } from "./Tile";
export declare class Square {
    isOccupied: boolean;
    tile: Tile | null;
    AddTile(tile: Tile): void;
}
