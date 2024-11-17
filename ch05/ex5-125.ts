// 예제 5.125 변경 후(1/3)

function removeLock1() {
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (check(map[y][x]))
        map[y][x] = new Air();
}
function check(tile: Tile) {
  return tile.isLock1();
}