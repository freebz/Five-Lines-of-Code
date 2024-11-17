// 예제 5.26 변경 전

enum FallingState {
  FALLING, RESTING
}









  new Stone(FallingState.FALLING);
  new Stone(FallingState.RESTING);
class Stone implements Tile {
  constructor(private falling: FallingState)
  { }
  // ...
  isFallingStone() {
    return this.falling
      === FallingState.FALLING;
  }
}