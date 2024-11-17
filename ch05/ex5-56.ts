// 예제 5.56 변경 후

function updateTile(x: number, y: number) {
  if (map[y][x].isStony()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Stone(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isBoxy()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Box(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isFalling()) {
    
    map[y][x].rest();
  }
}