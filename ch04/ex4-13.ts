// 예제 4.13 변경 전

window.addEventListener("keydown", e =>
{
  if (e.key === LEFT_KEY
        || e.key === "a")
    inputs.push(Input.LEFT);
  else if (e.key === UP_KEY
        || e.key === "w")
    inputs.push(Input.UP);
  else if (e.key === RIGHT_KEY
        || e.key === "d")
    inputs.push(Input.RIGHT);
  else if (e.key === DOWN_KEY
        || e.key === "s")
    inputs.push(Input.DOWN);
});

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