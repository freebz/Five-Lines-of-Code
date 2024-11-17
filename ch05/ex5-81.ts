// 예제 5.81 변경 후(3/5)

class Stone implements Tile {
  private fallStrategy: FallStrategy;
  constructor(
    private falling: FallingState)
  {
    this.fallStrategy =
      new FallStrategy(falling);

  }
  // ...
}
class FallStrategy {
  constructor(
    private falling: FallingState)
  {

  }
  getFalling() { return this.falling; }
  // ...
}