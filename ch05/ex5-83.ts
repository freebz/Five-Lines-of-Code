// 예제 5.83 변경 후(4/5)

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.falling
      .getFalling()
      .moveHorizontal(this, dx);
  }
}