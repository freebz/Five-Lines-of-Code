// 예제 4.100 변경 후

function drawMap(
  g: CanvasRenderingContext2D)
{
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      map[y][x].color(g)
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