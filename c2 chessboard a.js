var chessBoard =""
for(i=0; i<8; i++) {
  for(j=0; j<8; j++) {
    if ((i%2 == 0 && j%2 == 0) || (i%2 != 0 && j%2 != 0 )) chessBoard = chessBoard + " ";
    else chessBoard = chessBoard + "#";
  }
  chessBoard = chessBoard + "\n";
}
console.log(chessBoard);