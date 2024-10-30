"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LBlock = exports.SBlock = exports.TBlock = exports.Square = exports.Corner = exports.QuadLine = exports.TripleLine = exports.DoubleLine = exports.SingleSquare = void 0;
var Tile_1 = require("./Tile");
var SingleSquare = function () { return new Tile_1.Tile([[0, 0]]); };
exports.SingleSquare = SingleSquare;
var DoubleLine = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
    ]);
};
exports.DoubleLine = DoubleLine;
var TripleLine = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [0, 2],
    ]);
};
exports.TripleLine = TripleLine;
var QuadLine = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
    ]);
};
exports.QuadLine = QuadLine;
var Corner = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [1, 1],
    ]);
};
exports.Corner = Corner;
var Square = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [1, 1],
        [1, 0],
    ]);
};
exports.Square = Square;
var TBlock = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [1, 0],
        [-1, 0],
    ]);
};
exports.TBlock = TBlock;
var SBlock = function () {
    return new Tile_1.Tile([
        [0, 0],
        [0, 1],
        [1, 0],
        [1, -1],
    ]);
};
exports.SBlock = SBlock;
var LBlock = function () {
    return new Tile_1.Tile([
        [0, 0],
        [-1, 0],
        [0, 1],
        [0, 2],
    ]);
};
exports.LBlock = LBlock;
