// 예제 4.81 변경 전

function remove(tile: Tile) {
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (map[y][x] === tile)
        map[y][x] = new Air();
}