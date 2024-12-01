// 예제 6.44 변경 전

interface Tile {
  // ...
  moveHorizontal(
    dx: number): void;
  moveVertical(
    dy: number): void;
}
/// ...
function moveToTile(
  newx: number, newy: number)
{
  map[playery][playerx] =
    new Air();
  map[newy][newx] = new PlayerTile();
  playerx = newx;
  playery = newy;
}
/// ...

let playerx = 1;
let playery = 1;