// 예제 14.1 객체

function remove(
  shouldRemove: RemoveStrategy)
{
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shouldRemove.check(map[y][x]))
        map[y][x] = new Air();
}

class Key1 implements Tile {
  // ...
  moveHorizontal(dx: number) {
    remove(new RemoveLock1());
    moveToTile(playerx + dx, playery);
  }
}
interface RemoveStrategy {
  check(tile: Tile): boolean;
}
class RemoveLock1 implements RemoveStrategy
{
  check(tile: Tile) {
    return tile.isLock1();
  }
}