import { Tile } from "./Tile";
export const SingleSquare = () => new Tile([[0, 0]]);
export const DoubleLine = () => new Tile([
    [0, 0],
    [0, 1],
]);
export const TripleLine = () => new Tile([
    [0, 0],
    [0, 1],
    [0, 2],
]);
export const QuadLine = () => new Tile([
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
]);
export const Corner = () => new Tile([
    [0, 0],
    [0, 1],
    [1, 1],
]);
export const Square = () => new Tile([
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
]);
export const TBlock = () => new Tile([
    [0, 0],
    [0, 1],
    [1, 0],
    [-1, 0],
]);
export const SBlock = () => new Tile([
    [0, 0],
    [0, 1],
    [1, 0],
    [1, -1],
]);
export const LBlock = () => new Tile([
    [0, 0],
    [-1, 0],
    [0, 1],
    [0, 2],
]);
