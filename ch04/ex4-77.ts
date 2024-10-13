// 예제 4.77 변경 전

function removeLock1() {
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (map[y][x] === Tile.LOCK1)
        map[y][x] = new Air();
}