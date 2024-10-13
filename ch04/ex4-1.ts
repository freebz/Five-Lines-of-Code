// 예제 4.1 초기 코드

function handleInput(input: Input) {
  if (input === Input.LEFT) moveHorizontal(-1);
  else if (input === Input.RIGHT) moveHorizontal(1);
  else if (input === Input.UP) moveVertical(-1);
  else if (input === Input.DOWN) moveVertical(1);
}