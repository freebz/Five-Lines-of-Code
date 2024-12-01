// 예제 6.77 변경 전

function transformMap(map: Map) {
  map.setMap(new Array(rawMap.length));
  for (let y = 0; y < rawMap.length; y++) {
    map.getMap()[y] = new Array(rawMap[y].length);
    for (let x = 0; x < rawMap[y].length; x++)
      map.getMap()[y][x] = transformTile(rawMap[y][x]);
  }
}
function updateMap(map: Map) {
  for (let y = map.getMap().length - 1; y >= 0; y--)
    for (let x = 0; x < map.getMap()[y].length; x++)
      map.getMap()[y][x].update(map, x, y);
}
function drawMap(map: Map, g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.getMap().length; y++)
    for (let x = 0; x < map.getMap()[y].length; x++)
      map.getMap()[y][x].draw(g, x, y);
}