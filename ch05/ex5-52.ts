// 예제 5.52 변경 후

function updateTile(x: number, y: number) {
  if (map[y][x].isStony()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Stone(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isBoxy()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Box(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()) {
    map[y][x].rest();
  } else if (map[y][x].isFallingBox()) {
    map[y][x].rest();
  }
}