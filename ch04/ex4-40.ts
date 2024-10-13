// 예제 4.40 변경 후

function handleInput(input: Input) {
  input.handle();
}

interface Input {
  // ...
  handle(): void;
}
class Left implements Input {
  // ...
  handle() { moveHorizontal(-1); }
}
class Right implements Input {
  // ...
  handle() { moveHorizontal(1); }
}
class Up implements Input {
  // ...
  handle() { moveVertical(-1); }
}
class Down implements Input {
  // ...
  handle() { moveVertical(1); }
}