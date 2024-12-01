// 예제 6.73 변경 후(3/4)

interface Tile {
  // ...
  moveHorizontal(map: Map,
    player: Player, dx: number): void;
  moveVertical(map: Map,
    player: Player, dy: number): void;
  update(map: Map,
    x: number, y: number): void;
}
/// ...