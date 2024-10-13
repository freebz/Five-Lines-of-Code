// 예제 4.39 변경 전

function handleInput(input: Input) {
  if (input.isLeft())
    moveHorizontal(-1);
  else if (input.isRight())
    moveHorizontal(1);
  else if (input.isUp())
    moveVertical(-1);
  else if (input.isDown())
    moveVertical(1);
}