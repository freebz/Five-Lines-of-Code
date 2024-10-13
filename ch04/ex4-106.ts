// 예제 4.106 변경 후

function drawMap(
  g: CanvasRenderingContext2D)
{
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      map[y][x].draw(g);
    }
  }
}