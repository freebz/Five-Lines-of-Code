// 예제 3.26 변경 후

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    handleInputs(current);
  }
}

function handleInput(input: Input) {
  if (input === Input.LEFT)
    moveHorizontal(-1);
  else if (input === Input.RIGHT)
    moveHorizontal(1);
  else if (input === Input.UP)
    moveVertical(-1);
  else if (input === Input.DOWN)
    moveVertical(1);
}