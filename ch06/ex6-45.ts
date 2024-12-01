// 예제 6.45 변경 후

interface Tile {
  // ...
  moveHorizontal(
    player: Player, dx: number): void;
  moveVertical(
    player: Player, dy: number): void;
}
/// ...
function moveToTile(
  newx: number, newy: number)
{
  map[player.getY()][player.getX()] =
    new Air();
  map[newy][newx] = new PlayerTile();
  player.setX(newx);
  player.setY(newy);
}
/// ...
class Player {
  private x = 1;
  private y = 1;
  getX() { return this.x; }
  getY() { return this.y; }
  setX(x: number) { this.x = x; }
  setY(y: number) { this.y = y; }
}
let player = new Player();