// 예제 6.23 변경 후(2/3)

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy
      .moveHorizontal(this, dx);
  }
}
class Box implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy
      .moveHorizontal(this, dx);
  }
}
class FallStrategy {
  // ...
  moveHorizontal(tile: Tile, dx: number) {
    this.falling
      .moveHorizontal(tile, dx);
  }
}