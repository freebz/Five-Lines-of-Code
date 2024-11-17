// 예제 5.82 변경 전

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.falling
      
      .moveHorizontal(this, dx);
  }
}