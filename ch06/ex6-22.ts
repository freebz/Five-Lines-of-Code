// 예제 6.22 변경 전

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy.getFalling()
      .moveHorizontal(this, dx);
  }
}
class Box implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy.getFalling()
      .moveHorizontal(this, dx);
  }
}
class FallStrategy {
  // ...
}