// 예제 5.80 변경 전

class Stone implements Tile {
  private fallStrategy: FallStrategy;
  constructor(
    private falling: FallingState)
  {
    this.fallStrategy =
      new FallStrategy();

  }
  // ...
}
class FallStrategy {
  // ...
}