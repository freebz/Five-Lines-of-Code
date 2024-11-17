// 예제 5.15 변경 후(5/8)

class Stone implements Tile {
  // ...
  isFallingStone() { return this.falling; }
}
class FallingStone implements Tile {
  // ...
  isFallingStone() { return this.falling; }
}