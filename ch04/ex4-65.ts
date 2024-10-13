// 예제 4.65 새로운 클래스들

class Flux implements Tile2 {
  isFlux() { return true; }
  isUnbreakable() { return false; }
  isStone() { return false; }
  // ...
}
class Unbreakable implements Tile2 { ... }
class Stone implements Tile2 { ... }
/// ...