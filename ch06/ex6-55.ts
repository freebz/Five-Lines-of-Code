// 예제 6.55 변경 후

class Player {
  // ...
  
  moveHorizontal(dx: number) {
    map[this.y][this.x + dx]
      .moveHorizontal(this, dx);
  }
  move(dx: number, dy: number) {
    moveToTile(this.x + dx, this.y + dy);
  }
  pushHorizontal(tile: TimerHandler, dx: number) {
    if (map[this.y][this.x + dx + dx].isAir()
      && !map[this.y + 1][this.x + dx].isAir())
    {
      map[this.y][this.x + dx + dx] = tile;
      moveToTile(this.x + dx, this.y);
    }
  }
  moveToTile(newx: number, newy: number) {
    map[this.y][this.x] = new Air();
    map[newy][newx] = new PlayerTile();
    this.x = newx;
    this.y = newy;
  }
}