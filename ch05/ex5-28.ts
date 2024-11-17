// 예제 5.28 변경 전

interface FallingState {
  // ...
  

}
class Falling implements FallingState {
  // ...

  
}
class Resting implements FallingState {
  // ...
}
class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    if (!this.falling.isFalling()) {
      if (map[playery][playerx+dx+dx].isAir()
      && !map[playery+1][playerx+dx].isAir())
      {
        map[playery][playerx+dx + dx] = this;
        moveToTile(playerx+dx, playery);
      }
    } else if (this.falling.isFalling()) {
    }
  }
}