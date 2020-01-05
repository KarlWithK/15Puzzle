// cite: https://stackoverflow.com/questions/27065230/how-to-split-up-an-image-in-pieces-and-reshuffle-it-using-html-javascript-or-c
const canvas = document.querySelector(".test");
const context = canvas.getContext("2d");
const rows = 4;
const cols = 4;

const img = new Image();
img.onload = draw;
// should have img.src be uploaded
// img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png";
img.src = "http://i.huffpost.com/gen/1121938/images/o-DINOSAUR-facebook.jpg";
function draw() {
  const iw = canvas.width = img.width;
  const ih = canvas.height = img.height;
  const pieceWidth = iw / cols;
  const pieceHeight = ih / rows;

  let pieces = [
    {col: 0, row: 0, id: 0},
    {col: 1, row: 0, id: 1},
    {col: 2, row: 0, id: 2},
    {col: 3, row: 0, id: 3},
    {col: 0, row: 1, id: 4},
    {col: 1, row: 1, id: 5},
    {col: 2, row: 1, id: 6},
    {col: 3, row: 1, id: 7},
    {col: 0, row: 2, id: 8},
    {col: 1, row: 2, id: 9},
    {col: 2, row: 2, id: 10},
    {col: 3, row: 2, id: 11},
    {col: 0, row: 3, id: 12},
    {col: 1, row: 3, id: 13},
    {col: 2, row: 3, id: 14},
    {col: 3, row: 3, id: 15}
  ]
  shuffle(pieces);
  // console.log(pieces);

  let i = 0;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const p = pieces[i++];
      context.drawImage(img, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight, p.col * pieceWidth, p.row * pieceHeight, pieceWidth, pieceHeight);
    }
  }

  // let lastPiece = pieces.findIndex(piece => piece.id === 15)
  // console.log(lastPiece);
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        col ``
        console.log(a[i], a[j]);
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
