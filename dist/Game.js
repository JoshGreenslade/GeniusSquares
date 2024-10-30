"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Board_1 = require("./Board");
var Tiles = __importStar(require("./Tiles"));
var Game = /** @class */ (function () {
    function Game() {
        this.sizeX = 6;
        this.sizeY = 6;
        this.nTilesBlocked = 7;
        this.board = new Board_1.Board(this.sizeX, this.sizeY);
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
    Game.prototype.AddBlockers = function () {
        var nBlocksRemaining = this.nTilesBlocked;
        var x;
        var y;
        while (nBlocksRemaining > 0) {
            x = getRandomInt(0, this.sizeX);
            y = getRandomInt(0, this.sizeY);
            if (!this.board.GetSquare(x, y).isOccupied) {
                this.board.GetSquare(x, y).isOccupied = true;
                nBlocksRemaining--;
            }
        }
    };
    Game.prototype.IsBoardFull = function () {
        var allTilesOccupied = this.board.squares.every(function (row) {
            return row.every(function (square) { return square.isOccupied; });
        });
        return allTilesOccupied ? true : false;
    };
    return Game;
}());
exports.Game = Game;
function getRandomInt(min, max) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
