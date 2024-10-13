// 예제 4.85 변경 후(1/4)

function canMove(start: Tile, end: Tile,
  dx: number, dy: number)
{
  return dx * abs(start.x - end.x)
    ===  dy * abs(start.y - end.y)
    ||   dy * abs(start.x - end.x)
    ===  dx * abs(start.y - end.y);
}
function canMove(start: Tile, end: Tile,
  dx: number, dy: number)
{
  return dx * abs(start.x - end.x)
    ===  dy * abs(start.y - end.y)
    ||   dy * abs(start.x - end.x)
    ===  dx * abs(start.y - end.y);
}