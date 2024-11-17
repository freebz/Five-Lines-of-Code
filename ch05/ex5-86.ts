// 예제 5.86 변경 전

class Stone implements Tile {

  constructor(private falling: fallStrategy)
  {
    

  }
  // ...
  update(x: number, y: number) {
    if (map[y + 1][x].isAir()) {
      this.falling = new this.falling();
      map[y + 1][x] = this;
      map[y][x] = new Air();
    } else if (this.falling.isFalling()) {
      this.falling = new Resting();
    }
  }
}