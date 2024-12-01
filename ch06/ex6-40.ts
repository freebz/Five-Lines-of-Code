// 예제 6.40 변경 후(2/4)

function moveToTile(
  newx: number, newy: number)
{
  map[player.getY()][player.getX()] =
    new Air();
  map[newy][newx] = new PlayerTile();
  player.setX(newx);
  player.setY(newy);
}
/// ...