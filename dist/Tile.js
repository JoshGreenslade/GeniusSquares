export class Tile {
    constructor(shape) {
        this.isPlaced = false;
        this.shape = shape;
    }
    Rotate() {
        const newShape = [];
        this.shape.forEach((pos) => {
            const x = pos[0];
            const y = pos[1];
            const newX = -y;
            const newY = x;
            newShape.push([newX, newY]);
        });
        this.shape = newShape;
    }
    Flip() {
        const newShape = [];
        this.shape.forEach((pos) => {
            const x = pos[0];
            const y = pos[1];
            const newX = -x;
            const newY = y;
            newShape.push([newX, newY]);
        });
        this.shape = newShape;
    }
}
