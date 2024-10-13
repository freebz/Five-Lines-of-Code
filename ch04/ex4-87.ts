// 예제 4.87 변경 후(2/4)

function rockCanMove(
  start: Tile, end: Tile)
{
  return 1 * abs(start.x - end.x)
    ===  0 * abs(start.y - end.y)
    ||   0 * abs(start.x - end.x)
    ===  1 * abs(start.y - end.y);
}