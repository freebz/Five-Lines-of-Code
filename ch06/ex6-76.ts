// 예제 6.76 변경 후

interface Tile {
  // ...
  moveHorizontal(map: Map, player: Player, dx: number): void;
  moveVertical(map: Map, player: Player, dy: number): void;
  update(map: Map, x: number, y: number): void;
}
/// ...
function remove(map: Map, shouldRemove: RemoveStrategy)
{
  for (let y = 0; y < map.getMap().length; y++)
    for (let x = 0; x < map.getMap()[y].length; x++)
      if (shouldRemove.check(
        map.getMap()[y][x])))
        map.getMap()[y][x] = new Air();
}
/// ...
class Map {
  private map: Tile[][];
  getMap() { return this.map; }
  setMap(map: Tile[][]) { this.map = map; }
}