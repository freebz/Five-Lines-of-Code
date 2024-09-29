// 예제 3.18 변경 후

function createGraphics() {
  let canvas = document
      .getElementById('GameCanvas')
      as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0,
      canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}