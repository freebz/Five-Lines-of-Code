// 예제 3.17 변경 전

function draw() {
  let canvas = document
      .getElementById('GameCanvas')
      as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0,
      canvas.width, canvas.height);

  drawMap(g);
  drawPlayer(g);
}