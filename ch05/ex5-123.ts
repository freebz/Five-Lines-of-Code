// 예제 5.123 removeLock2

function removeLock2() {
  for (let y = 0; y < Map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}