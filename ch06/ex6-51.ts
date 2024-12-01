// 예제 6.51 변경 후(2/3)

class Right implements Input {
  handle(player: Player) {
    player.moveHorizontal(1);
  }
}
class Resting {
  // ...
  moveHorizontal(
    player: Player, tile: Tile, dx: number)
  {
    player.pushHorizontal(tile, dx);
  }
}
/// ...
Player.move(0, dy);
/// ...
function moveToTile(player,
  newx: number, newy: number)
{
  player.moveToTile(newx, newy);
}
/// ...
class Player {
  // ...
  moveHorizontal(dx: number) {
    map[this.y][this.x + dx]
      .moveHorizontal(this, dx);
    }
  move(dx: number, dy: number) {
    this.moveToTile(this.x+dx, this.y+dy);
  }
  pushHorizontal(tile: Tile, dx: number) {
    if (map[this.y]
           [this.x+dx + dx].isAir()
        && !map[this.y + 1]
               [this.x+dx].isAir())
    {
      map[this.y][this.x+dx + dx] = tile;
      this.moveToTile(this.x+dx, this.y);
    }
  }
  moveToTile(newx: number, newy: number) {
    map[this.y][this.x] = new Air();
    map[newy][newx] = new PlayerTile();
    this.x = newx;
    this.y = newy;
  }
}