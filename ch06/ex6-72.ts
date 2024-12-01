// 예제 6.72 변경 전

interface Tile {
  // ...
  moveHorizontal(
    player: Player, dx: number): void;
  moveVertical(
    player: Player, dy: number): void;
  update(
    x: number, y: number): void;
}
/// ...