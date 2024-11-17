// 예제 5.38 변경 후(4/8)

class Red implements TrafficColor {
  constructor(
    private col: string = "red") { }
  color() { return "red"; }
  // ...
}
class Yellow implements TrafficColor {
  constructor(
    private col: string = "yellow") { }
  color() { return "yellow"; }
  // ...
}
class Green implements TrafficColor {
  constructor(
    private col: string = "green") { }
  color() { return "green"; }
  // ...
}