export class Tile {
  public shape: number[][];
  public isPlaced: boolean = false;

  constructor(shape: number[][]) {
    this.shape = shape;
  }

  public Rotate(): void {
    const newShape: number[][] = [];

    this.shape.forEach((pos) => {
      const x = pos[0];
      const y = pos[1];

      const newX = -y;
      const newY = x;

      newShape.push([newX, newY]);
    });

    this.shape = newShape;
  }

  public Flip(): void {
    const newShape: number[][] = [];

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
