// 예제 7.2 도달 가능성에 의한 컴파일러 에러

enum Color {
  RED, GREEN, BLUE
}
function assertExhausted(s: never): never {
  throw new Error("Unexpected object: " + x);
}
function handle(t: Color) {
  if (t === Color.RED) return "#ff0000";
  if (t === Color.GREEN) return "#00ff00";
  assertExhausted(t);
}