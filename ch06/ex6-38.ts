// 예제 6.38 변경 후(1/4)

class Player {
  private x = 1;
  private y = 1;
  getX() { return this.x; }
  getY() { return this.y; }
  setX(x: number) { this.x = x; }
  setY(y: number) { this.y = y; }
}