// 예제 4.99 변경 전

function drawMap(
  g: CanvasRenderingContext2D)
{
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(g, x, y);
      if (map[y][x] !== Tile.AIR
          && map[y][x] !== Tile.PLAYER)
        g.fillRect(
          x * TILE_SIZE,
          y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE);
    }
  }
}

function colorOfTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  map[y][x].color(g);
}