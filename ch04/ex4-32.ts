// 예제 4.32 변경 후(1/4)

class Right implements Input {
  // ...
  handleInput() {
    if (false)
      moveHorizontal(-1);
    else if (true)
      moveHorizontal(1);
    else if (false)
      moveVertical(-1);
    else if (false)
      moveVertical(1);
  }
}