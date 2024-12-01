// 예제 6.75 변경 전

interface Tile {
  // ...
  moveHorizontal(player: Player, dx: number): void;
  moveVertical(player: Player, dy: number): void;
  update(x: number, y: number): void;
}
/// ...
function remove(shouldRemove: RemoveStrategy)
{
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shouldRemove.check(
        map[y][x])))
        map[y][x] = new Air();
}
/// ...
let map: Tile[][];