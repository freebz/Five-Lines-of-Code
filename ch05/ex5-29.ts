// 예제 5.29 변경 후

interface FallingState {
  // ...
  moveHorizontal(
    tile: Tile, dx: number): void;
}
class Falling implements FallingState {
  // ...
  moveHorizontal(tile: Tile, dx: number) {
  }
}
class Resting implements FallingState {
  // ...
  moveHorizontal(tile: Tile, dx: number) {
    if (map[playery][playerx+dx+dx].isAir()
    && !map[playery+1][playerx+dx].isAir())
    {
      map[playery][playerx+dx + dx] = this;
      moveToTile(playerx+dx, playery);
    }
  }
}
class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.FALLING.moveHorizontal(this, dx);
  }
}