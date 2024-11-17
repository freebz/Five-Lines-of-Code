// 예제 5.129 변경 전

function removeLock1() {
  let shuoldRemove = new RemoveStrategy();
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (check(map[y][x]))
        map[y][x] = new Air();
}

function check(tile: Tile) {
  return tile.isLock1();
}