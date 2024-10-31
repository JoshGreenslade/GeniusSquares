export class Square {
    constructor() {
        this.isOccupied = false;
        this.tile = null;
    }
    AddTile(tile) {
        this.isOccupied = true;
        this.tile = tile;
    }
}
