// 예제 4.55 변경 후

function handleInputs() {
  while (inputs.length > 0) {
    let input = inputs.pop();
    input.handle();
  }
}