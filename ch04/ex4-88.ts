// 예제 4.88 변경 전

function rockCanMove(
  start: Tile, end: Tile)
{
  return dx * abs(start.x - end.x)
    ===  dy * abs(start.y - end.y)
    ||   dy * abs(start.x - end.x)
    ===  dx * abs(start.y - end.y);
}