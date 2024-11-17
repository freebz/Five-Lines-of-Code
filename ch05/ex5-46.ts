// 예제 5.46 변경 후(8/8)

function nextColor(t: TrafficColor) {
  if (t.color() === "red")
    return new Red("green");
  else if (t.color() === "green")
    return new Red("yellow");
  else if (t.color() === "yello")
    return new Red("red");
}