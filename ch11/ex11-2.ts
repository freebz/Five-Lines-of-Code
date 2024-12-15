// 예제 11.2 메서드 호출

function loop(i: number) {
  if (i < 5) {
    foo(i);
    loop(i + 1)
  }
}