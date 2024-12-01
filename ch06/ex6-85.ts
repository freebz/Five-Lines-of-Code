// 예제 6.85 변경 전

function remove(map: Map,
  shouldRemove: RemoveStrategy)
{
  for (let y = 0;
      y < map.getMap().length;
      y++)
  for (let x = 0;
       x < map.getMap()[y].length;
       x++)
    if (shouldRemove.check(
        map.getMap()[y][x]))
      map.getMap()[y][x] = new Air();
}
class Map {
  // ...
  getMap() {
    return this.getMap;
  }
}