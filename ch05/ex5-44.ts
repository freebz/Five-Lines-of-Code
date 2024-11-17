// 예제 5.44 변경 후(7/8 )

function nextColor(t: TrafficColor) {
  if (t.color() === "red")
    return new Green();
  else if (t.color() === "green")
    return new Yellow();
  else if (t.color() === "yello")
    return new Red("red");
}