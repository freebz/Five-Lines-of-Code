// 예제 5.10 변경 전

class Stone implements Tile {
  
  
  
  
  // ...
  isFallingStone() { return false; }
}
class FallingStone implements Tile {
  
  
  
  
  // ...
  isFallingStone() { return true; }
}