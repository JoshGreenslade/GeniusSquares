"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square() {
        this.isOccupied = false;
        this.tile = null;
    }
    Square.prototype.AddTile = function (tile) {
        this.isOccupied = true;
        this.tile = tile;
    };
    return Square;
}());
exports.Square = Square;
