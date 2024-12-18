// 예제 13.1 나쁘지 않은 코드

function animate() {
  handleChosen();
  handleDisplaying();
  handleCompleted();
  handleMoving();
}
function handleChosen() {
  if (value >= threshold
    && banner.state === "chosen") {
    // ...
  }
}
function handleDisplaying() {
  if (value >= target
    && banner.state === "displaying") {
    // ...
  }
}
function handleCompleted() {
  if (banner.state === "completed") {
    // ...
  }
}
function handleMoving() {
  if (banner.state === "moving"
    && banner.target === banner.current) {
    // ...
  }
}