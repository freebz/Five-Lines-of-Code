// 예제 4.54 변경 전

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    handleInput(current);
  }
}

function handleInput(input: Input) {
  input.handle();
}