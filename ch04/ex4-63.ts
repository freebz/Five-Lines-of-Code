// 예제 4.63 메서드 추출(P3.2.1) 후

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      colorOfTile(g, x, y);
      if (map[y][x] !== Tile.AIR && map[y][x] !== Tile.PLAYER)
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function colorOfTile(g: CanvasRenderingContext2D, x: number, y: number) {
  if (map[y][x] === Tile.FLUX)
    g.fillStyle = "#ccffcc";
  else if (map[y][x] === Tile.UNBREAKBLE)
    g.fillStyle = "#999999";
  else if (map[y][x] === Tile.STONE || map[y][x] === Tile.FALLING_STONE)
    g.fillStyle = "#0000cc";
  else if (map[y][x] === Tile.BOX || map[y][x] === Tile.FALLING_BOX)
    g.fillStyle = "#8b4513";
  else if (map[y][x] === Tile.KEY1 || map[y][x] === Tile.LOCK1)
    g.fillStyle = "#ffcc00";
  else if (map[y][x] === Tile.KEY2 || map[y][x] === Tile.LOCK2)
    g.fillStyle = "#00ccff";
}