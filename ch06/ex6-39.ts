// 예제 6.39 변경 전

function moveToTile(
  newx: number, newy: number)
{
  map[playery][playerx] =
    new Air();
  map[newy][newx] = new PlayerTile();
  playerx = newx;
  playery = newy;
}
/// ...