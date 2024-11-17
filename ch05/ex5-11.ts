// 예제 5.11 변경 후(3/8)

class Stone implements Tile {




  // ...
  isFallingStone() { return false; }
}
class FallingStone implements Tile {




  // ...
  isFallingStone() { return true; }
}