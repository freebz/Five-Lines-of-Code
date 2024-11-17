// 예제 5.55 변경 전

function updateTile(x: number, y: number) {
  if (map[y][x].isStony()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Stone(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isBoxy()
        && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Box(new Falling());
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()
        || map[y][x].isFallingBox()) {
    map[y][x].rest();
  }
}