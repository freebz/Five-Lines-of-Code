// 예제 5.24 변경 전




/// ...
  new Stone(true);
/// ...
  new Stone(false);
/// ...
class Stone implements Tile {
  constructor(private falling: boolean)
  { }
  // ...
  isFallingStone() {
    return this.falling;
    
  }
}