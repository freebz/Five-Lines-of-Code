// 예제 5.48 변경 후

function nextColor(t: TrafficColor) {
  if (t.color() === "red")
    return new Red("green");
  else if (t.color() === "green")
    return new Red("yellow");
  else if (t.color() === "yello")
    return new Red("red");
}
interface TrafficColor {
  color(): string;
  check(car: Car): void;
}
class Red implements TrafficColor {
  constructor(private col: string) { }
  color() { return this.col; }
  check(car: Car) {
    if (this.color() === "red") {
      car.stop();  
    } else if (this.color() === "yellow") {
      car.stop();
    } else if (this.color() === "green") {
      car.drive();
    }
  }
}