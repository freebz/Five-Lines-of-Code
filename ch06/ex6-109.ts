// 예제 6.109 변경 전

let rawMap: RawTile[][] = [
  // ...
];
class Map {
  private map: Tile[][];
  constructor() {
    this.map = new Array(rawMap.length);
    for (let y = 0;
         y < rawMap.length;
         y++)
    {
      this.map[y] =
        new Array(rawMap[y].length);
      for (let x = 0;
           x < rawMap[y].length;
           x++)
        this.map[y][x] =
          transformTile(
            rawMap[y][x]);
    }
  }
  // ...
}
function transformTile(tile: RawTile) {
  // ...
}