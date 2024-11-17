// 예제 5.71 변경 전

function updateTile(x: number, y: number) {
  if ((map[y][x].isStony()
        || map[y][x].isBoxy())
        && map[y + 1][x].isAir()) {
    map[y][x].drop();
    map[y + 1][x] = map[y][x];
    map[y][x] = new Air();
  } else if (map[y][x].isFalling()) {
    map[y][x].rest();
  }
}