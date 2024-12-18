// 예제 13.21 변경 전

function animate() {
  handleChosen();
  handleDisplaying();
  handleCompleted();
  handleMoving();
}
function handleChosen() {
  if (value >= threshold
    && banner.state === State.Chosen) {
    // ...
  }
}
function handleDisplaying() {
  if (value >= target
    && banner.state === State.Displaying
  ) {
    // ...
  }
}
function handleCompleted() {
  if (banner.state === State.Completed) {
    // ...
  }
}
function handleMoving() {
  if (banner.state === State.Moving
    && banner.target === banner.current) {
    // ...
  }
}