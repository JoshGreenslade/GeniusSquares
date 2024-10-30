"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Square_1 = require("./Square");
var Board = /** @class */ (function () {
    function Board(sizeX, sizeY) {
        this.sizeX = 8;
        this.sizeY = 8;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.squares = this.createSquares();
    }
    Board.prototype.createSquares = function () {
        var _this = this;
        return Array.from({ length: this.sizeX }, function () {
            return Array.from({ length: _this.sizeY }, function () { return new Square_1.Square(); });
        });
    };
    Board.prototype.IsTileOccupied = function (pos) {
        return this.squares[pos[0]][pos[1]].isOccupied;
    };
    Board.prototype.CanTileBePlacedAtPos = function (tile, pos) {
        for (var _i = 0, _a = tile.shape; _i < _a.length; _i++) {
            var offset = _a[_i];
            var xPos = pos[0] + offset[0];
            var yPos = pos[1] + offset[1];
            if (xPos >= this.sizeX ||
                xPos < 0 ||
                yPos >= this.sizeY ||
                yPos < 0 ||
                this.IsTileOccupied([xPos, yPos])) {
                return false;
            }
        }
        return true;
    };
    Board.prototype.PlaceTile = function (tile, pos) {
        var _this = this;
        if (tile.isPlaced) {
            console.log("Tile ".concat(tile, " is already placed"));
            return;
        }
        if (!this.CanTileBePlacedAtPos(tile, pos)) {
            console.log("Tile ".concat(tile, " cannot be placed at position ").concat(pos));
            return;
        }
        tile.shape.forEach(function (offset) {
            var xPos = pos[0] + offset[0];
            var yPos = pos[1] + offset[1];
            console.log(xPos, yPos);
            _this.squares[xPos][yPos].AddTile(tile);
            tile.isPlaced = true;
        });
    };
    Board.prototype.GetSquare = function (x, y) {
        return this.squares[x][y];
    };
    Board.prototype.PrintBoard = function () {
        var line = "";
        for (var i = 0; i < this.sizeY; i++) {
            line = "";
            for (var j = 0; j < this.sizeX; j++) {
                line += " ".concat(this.squares[j][i].isOccupied ? "X" : "O");
            }
            console.log(line);
        }
    };
    return Board;
}());
exports.Board = Board;
