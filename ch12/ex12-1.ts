// 예제 12.1 불필요한 함수 일반화

function remove(tile: Tile) {
  for (let y = 0; y < Map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === tile) {
        map[y][x] = new Air();
      }
    }
  }
}