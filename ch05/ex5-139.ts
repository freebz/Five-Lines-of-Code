// 예제 5.139 변경 후

function removeLock1(
  shouldRemove: RemoveStrategy)
{ 
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (map[y][x].isLock1())
        map[y][x] = new Air();
}
class Key1 implements Tile {
  // ...
  moveHorizontal(dx: number) {
    removeLock1(new removeLock1());
    moveToTile(playerx + dx, playery);
  }
}
interface RemoveStrategy {
  check(tile: Tile): boolean;
}
class removeLock1 implements RemoveStrategy
{
  check(tile: Tile) {
    return tile.isLock1();
  }
}