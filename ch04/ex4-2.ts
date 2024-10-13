// 예제 4.2 사용자 입력을 내부에서 제어 가능한 데이터 타입으로 매핑

window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(Input.LEFT);
  else if (e.key === UP_KEY || e.key === "w") inputs.push(Input.UP);
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(Input.RIGHT);
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(Input.DOWN);
});