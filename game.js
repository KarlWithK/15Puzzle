const canvas = document.querySelector(".test");
const context = canvas.getContext("2d");
const rows = 4;
const cols = 4;

const img = new Image();
img.onload = draw;
// should have img.src be uploaded
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png";

function draw() {
  const iw = canvas.width = img.width;
  const ih = canvas.height = img.height;
  const pieceWidth = iw / cols;
  const pieceHeight = ih / rows;

  const pieces = [
    {col: 0, row: 0},
    {col: 1, row: 0},
    {col: 2, row: 0},
    {col: 3, row: 0},
    {col: 0, row: 1},
    {col: 1, row: 1},
    {col: 2, row: 1},
    {col: 3, row: 1},
    {col: 0, row: 2},
    {col: 1, row: 2},
    {col: 2, row: 2},
    {col: 3, row: 2},
    {col: 0, row: 3},
    {col: 1, row: 3},
    {col: 2, row: 3},
    {col: 3, row: 3}
  ]

  shuffle(pieces);
  let i = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const p = pieces[i++];
      context.drawImage(img, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight, p.col * pieceWidth, p.row * pieceHeight, pieceWidth, pieceHeight)
    }
  }
};

function shuffle(a) {
  for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
  return a;
};
