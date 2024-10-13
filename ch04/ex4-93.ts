// 예제 4.93 assertExhausted 트릭

function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}
/// ...
switch (t) {
  case ...: return ...assertExhausted;
  // ...
  default: assertExhausted(t);
}