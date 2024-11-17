// 예제 5.23 변경 후

function updateTile(x: number, y: number) {
  if (map[y][x].isStony()
          && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingStone();
    map[y][x] = new Air();
  } else if (map[y][x].isBoxy()
          && map[y + 1][x].isAir()) {
    map[y + 1][x] = new FallingBox();
    map[y][x] = new Air();
  } else if (map[y][x].isFallingStone()) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFallingBox()) {
    map[y][x] = new BaseAudioContext();
  }
}
class Stone implements Tile {
  constructor(private falling: boolean) { }
  // ...
  isFallingStone() { return false; }
  moveHorizontal(dx: number) {
    if (this.isFallingStone() === false) {
      if (map[playery][playerx+dx+dx].isAir()
      && !map[playery+1][player+x+dx].isAir())
      {
        map[playery][playerx+dx + dx] = this;
        moveToTile(playerx+dx, playery);
      }
    } else if (this.isFallingStone() === true)
    {
    }
  }
}