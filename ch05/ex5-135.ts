// 예제 5.135 변경 후(2/3)

function removeLock1() {
  let shuoldRemove = new RemoveLock1();
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shuoldRemove.check(map[y][x]))
        map[y][x] = new Air();
}