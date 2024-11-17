// 예제 5.138 변경 전

function removeLock1() {

  
  for (let y = 0; y < Map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (map[y][x].isLock1())
        map[y][x] = new Air();
}
class Key1 implements Tile {
  // ...
  moveHorizontal(dx: number) {
    removeLock1();
    moveToTile(playerx + dx, playery);
  }
}