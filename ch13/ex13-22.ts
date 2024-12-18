// 예제 13.22 변경 후

function animate() {
  if (value >= threshold
    && banner.state === State.Chosen) {
    // ...
  }
  if (value >= target
    && banner.state === State.Displaying
  ) {
    // ...
  }
  if (banner.state === State.Completed) {
    // ...
  }
  if (banner.state === State.Moving
    && banner.target === banner.current) {
    // ...
  }
}