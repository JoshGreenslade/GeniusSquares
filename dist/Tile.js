"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(shape) {
        this.isPlaced = false;
        this.shape = shape;
    }
    Tile.prototype.Rotate = function () {
        var newShape = [];
        this.shape.forEach(function (pos) {
            var x = pos[0];
            var y = pos[1];
            var newX = -y;
            var newY = x;
            newShape.push([newX, newY]);
        });
        this.shape = newShape;
    };
    Tile.prototype.Flip = function () {
        var newShape = [];
        this.shape.forEach(function (pos) {
            var x = pos[0];
            var y = pos[1];
            var newX = -x;
            var newY = y;
            newShape.push([newX, newY]);
        });
        this.shape = newShape;
    };
    return Tile;
}());
exports.Tile = Tile;
