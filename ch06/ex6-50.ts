// 예제 6.50 변경 전

class Right implements Input {
  handle(player: Player) {
    map[player.getY()][player.getX() + 1]
      .moveHorizontal(player, 1);
  }
}
class Resting {
  // ...
  moveHorizontal(
    player: Player, tile: Tile, dx: number)
  {
    if (map[player.getY()]
           [player.getX()+dx + dx].isAir()
        && !map[player.getY() + 1]
               [player.getX()+dx].isAir())
    {
      map[player.getY()]
         [player.getX()+dx + dx] = tile;
      moveToTile(player,
        player.getX()+dx,
        player.getY());
    }
  }
}
/// ...
    moveToTile(player,
      player.getX(), player.getY() + dx);
/// ...
function moveToTile(player: Player,
  newx: number, newy: number)
{
  map[player.getY()][player.getX()] =
    new Air();
  map[newy][newx] = new PlayerTile();
  player.setX(newx);
  player.setY(newy);
}
/// ...
class Player {
  // ...
}