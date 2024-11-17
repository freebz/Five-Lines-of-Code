// 예제 5.127 변경 전

function removeLock1() {
  
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (check(map[y][x]))
        map[y][x] = new Air();
}