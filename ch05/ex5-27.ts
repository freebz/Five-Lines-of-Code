// 예제 5.27 변경 후

interface FallingState {
  isFalling(): boolean;
  isResting(): boolean;
}
class Falling implements FallingState {
  isFalling() { return true; }
  isResting() { return false; }
}
class Resting implements FallingState {
  isFalling() { return false; }
  isResting() { return true; }
}
  new Stone(new Falling());
  new Stone(new Resting());
class Stone implements Tile {
  constructor(private falling: FallingState)
  { }
  // ...
  isFallingStone() {
    return this.falling.isFalling();
    
  }
}