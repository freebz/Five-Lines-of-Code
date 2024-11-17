// 예제 5.5 FallingStone

class FallingStone implements Tile {
  isAir() { return false; }
  isFallingStone() { return true; }
  isFallingBox() { return false; }
  isLock1() { return false; }
  isLock2() { return false; }
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    // ...
  }
  moveVertical(dx: number) { }
  isStoy() { return true; }
  isBoxy() { return false; }
  moveHorizontal(dx: number) {
    
  }
}