// 예제 5.14 변경 전

class Stone implements Tile {
  // ...
  isFallingStone() { return false; }
}
class FallingStone implements Tile {
  // ...
  isFallingStone() { return true; }
}