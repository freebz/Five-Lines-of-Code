// 예제 5.43 변경 전

function nextColor(t: TrafficColor) {
  if (t.color() === "red")
    return new Green();
  else if (t.color() === "green")
    return new Yellow();
  else if (t.color() === "yello")
    return new Red();
}