// 예제 6.110 변경 후

let rawMap: number[][] = [
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
            RAW_TILES[rawMap[y][x]]);
    }
  }
  // ...
}
function transformTile(tile: RawTile2) {
  // ...
}