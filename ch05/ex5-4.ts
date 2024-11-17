// 예제 5.4 Stone

class Stone implements Tile {
  isAir() { return false; }
  isFallingStone() { return false; }
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
    // ...
  }
}