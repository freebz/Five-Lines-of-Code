// 예제 6.42 변경 후(3/4)

interface Tile {
  // ...
  moveHorizontal(
    player: Player, dx: number): void;
  moveVertical(
    player: Player, dy: number): void;
}