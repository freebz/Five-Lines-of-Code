// 예제 6.47 변경 후

function drawPlayer(player: Player,
  g: CanvasRenderingContext2D)
{
  player.draw(g);
}
class Player {
  // ...
  draw(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ff0000";
    g.fillRect(
      this.x * TILE_SIZE,
      this.y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE);
  }
}