// 예제 14.2 고차 함수

function remove(
  shouldRemove: (tile: Tile) => boolean)
{
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shouldRemove(map[y][x]))
        map[y][x] = new Air();
}

class Key1 implements Tile {
  // ...
  moveHorizontal(dx: number) {
    remove(tile => tile.isLock1());
    moveToTile(playerx + dx, playery);
  }
}