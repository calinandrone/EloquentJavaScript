var chessBoard = "";
var size = 16;
for(i=0; i<size; i++) {
  for(j=0; j<size; j++) {
    if ((i%2 == 0 && j%2 == 0) || (i%2 != 0 && j%2 != 0 )) chessBoard = chessBoard + " ";
    else chessBoard = chessBoard + "#";
  }
  chessBoard = chessBoard + "\n";
}
console.log(chessBoard);