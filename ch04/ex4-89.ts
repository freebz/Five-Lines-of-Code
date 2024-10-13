// 예제 4.89 변경 후(2/4)

function rockCanMove(
  start: Tile, end: Tile)
{
  return abs(start.x - end.x)
    ===  0
    ||   0
    ===  abs(start.y - end.y);
}