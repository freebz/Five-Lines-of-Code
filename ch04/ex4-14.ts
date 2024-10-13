// 예제 4.14 변경 후

window.addEventListener("keydown", e =>
{
  if (e.key === LEFT_KEY
        || e.key === "a")
    inputs.push(new Left());
  else if (e.key === UP_KEY
        || e.key === "w")
    inputs.push(new Up());
  else if (e.key === RIGHT_KEY
        || e.key === "d")
    inputs.push(new Right());
  else if (e.key === DOWN_KEY
        || e.key === "s")
    inputs.push(new Down());
});

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