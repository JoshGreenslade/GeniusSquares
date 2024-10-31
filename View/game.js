import * as GSquares from "../Core/dist/GSquares.js";

let g = new GSquares.Game();
let tiles = GSquares.Tiles;
let tilesList = [
  tiles.SingleSquare(),
  tiles.DoubleLine(),
  tiles.TripleLine(),
  tiles.QuadLine(),
  tiles.Corner(),
  tiles.TBlock(),
  tiles.SBlock(),
  tiles.LBlock(),
  tiles.Square(),
];
let currTile = tilesList.pop();

g.board.PrintBoard();

let app = document.getElementById("app");
let colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "olive",
  "aqua",
  "wheat",
  "gold",
];
let gridColors = Array.from({ length: 6 }, () =>
  Array.from({ length: 6 }, () => "gray")
);
let currColorIndex = 0;

CreateBoard(app);

function onClick(row, col) {
  console.log(`Clicked cell at row ${row}, column ${col}`);
  if (g.board.CanPlaceTile(currTile, [col, row])) {
    g.board.PlaceTile(currTile, [col, row]);
    const color = colors[currColorIndex];
    currTile.shape.forEach((offset) => {
      const xPos = row + offset[1];
      const yPos = col + offset[0];
      gridColors[yPos][xPos] = color;
    });
    console.log(`Placed tile ${currTile} at ${row}, column ${col}`);

    currColorIndex = (currColorIndex + 1) % colors.length;

    UpdateBoard(app);

    currTile = tilesList.pop();
  } else {
    console.log(`Cannot place tile ${currTile} at ${row}, column ${col}`);
  }
}

function GetCell(xPos, yPos) {
  return document.querySelector(`[data-row="${xPos}"][data-col="${yPos}"]`);
}

function CreateBoard(app) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid");
  app.appendChild(gridContainer);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (g.board.squares[i][j].isOccupied) {
        gridColors[i][j] = "darkslategrey";
      }
    }
  }
  UpdateBoard(app);
  console.log(currTile.shape);
  document.addEventListener("keypress", (e) => {
    if (e.key === "f") {
      console.log("Pressed F");
      currTile.Flip();
      UpdateBoard(app);
    }
    if (e.key === "r") {
      console.log("Pressed E");
      currTile.Rotate();
      UpdateBoard(app);
    }
  });
}

function ShowPreview(row, col) {
  currTile.shape.forEach((offset) => {
    const xPos = row + offset[1];
    const yPos = col + offset[0];
    const cell = GetCell(xPos, yPos);
    if (cell) {
      cell.style.opacity = 0.2;
    }
  });
}

function HidePreview(row, col) {
  currTile.shape.forEach((offset) => {
    const xPos = row + offset[1];
    const yPos = col + offset[0];
    const cell = GetCell(xPos, yPos);
    if (cell) {
      cell.style.opacity = 1;
    }
  });
}

function UpdateBoard(app) {
  const gridContainer = app.querySelector(".grid");
  gridContainer.innerHTML = "";

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = row;
      cell.dataset.col = col;

      if (g.board.GetSquare(col, row).isOccupied) {
        cell.style.backgroundColor = gridColors[col][row];
      } else {
        cell.style.backgroundColor = "lightgray";
      }
      cell.addEventListener("click", () => onClick(row, col));
      cell.addEventListener("mouseover", () => ShowPreview(row, col));
      cell.addEventListener("mouseleave", () => HidePreview(row, col));
      gridContainer.appendChild(cell);
    }
  }

  app.appendChild(gridContainer);
}
