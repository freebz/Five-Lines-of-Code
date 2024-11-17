// 예제 5.8 변경 전

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    if (true) {
      if (map[playery][playerx+dx+dx].isAir()
      && !map[playery+1][player+x+dx].isAir())
      {
        map[playery][playerx+dx + dx] = this;
        moveToTile(playerx+dx, playery);
      }
    }
  }
}
class FallingStone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    if (true) { }
  }
}