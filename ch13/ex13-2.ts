// 예제 13.2 의도적으로 나쁜 코드

function animate() {
  // FIXME: All concern banner.state
  if (value >= threshold
    && banner.state === State.Chosen) {

    // ...

  }
  if (value >= target
    && banner.state === State.Displaying) {

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
enum State {
  Chosen, Displaying, Completed, Moving
}