// 예제 5.50 drop과 rest 메서드를 도입한 후

interface Tile {
  // ...
  drop(): void;
  rest(): void;
}
class Stone implements Tile {
  // ...
  drop() { this.falling = new Falling(); }
  rest() { this.falling = new Resting(); }
}
class Flux implements Tile {
  // ...
  drop() { }
  rest() { }
}