// 예제 4.33 변경 전

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