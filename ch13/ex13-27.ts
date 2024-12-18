// 예제 12.27 변경 후

class Screen {
  constructor(
    private width: number,
    private height: number) { }
  getWidth() { return this.width; }
  getHeight() { return this.height; }
}
let screen: Screen;