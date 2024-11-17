// 예제 5.9 변경 후(2/8)

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    if (this.isFallingStone() === false) {
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
    if (this.isFallingStone() === true) { }
  }
}