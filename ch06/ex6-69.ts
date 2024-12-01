// 예제 6.69 변경 후(1/4)

class Map {
  private map: Tile[][];
  getMap() { return this.map; }
  setMap(map: Tile[][]) { this.map = map; }
}