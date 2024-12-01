// 예제 6.78 변경 후

class Map {
  // ...
  transform() {
    this.map = new Array(rawMap.length);
    for (let y = 0; y < rawMap.length; y++) {
      this.map[y] = new Array(rawMap[y].length);
      for (let x = 0; x < rawMap[y].length; x++)
        this.map[y][x] = transformTile(rawMap[y][x]);
    }
  }
  update() {
    for (let y = this.map.length - 1; y >= 0; y--)
      for (let x = 0; x < this.map[y].length; x++)
        this.map[y][x].update(map, x, y);
  }
  draw(g: CanvasRenderingContext2D) {
    for (let y = 0; y < this.map.length; y++)
      for (let x = 0; x < this.map[y].length; x++)
        this.map[y][x].draw(g, x, y);
  }
}