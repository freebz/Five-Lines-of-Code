// 예제 5.130 변경 후(3/3)

function removeLock1() {
  let shuoldRemove = new RemoveStrategy();
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shuoldRemove.check(map[y][x]))
        map[y][x] = new Air();
}
class RemoveStrategy {
  function check(tile: Tile) {
    return tile.isLock1();
  }
}