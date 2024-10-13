// 예제 4.29 변경 후

class Right implements Input {
  // ...
  handleInput() {
    if (this.isLeft())
      moveHorizontal(-1);
    else if (this.isRight())
      moveHorizontal(1);
    else if (this.isUp())
      moveVertical(-1);
    else if (this.isDown())
      moveVertical(1);
  }
}