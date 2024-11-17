// 예제 5.77 변경 후(1/5)

class Stone implements Tile {
  private fallStrategy: FallStrategy;
  constructor(
    private falling: FallingState)
  {
    this.fallStrategy = new FallStrategy();
  }
  // ...
}