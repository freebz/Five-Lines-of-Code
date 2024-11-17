// 예제 5.34 변경 후(2/8)

class Red implements TrafficColor {
  color() { return "red"; }
  check(car: Car) {
    if (this.color() === "red") {
      car.stop();
    }
  }
}
class Yellow implements TrafficColor {
  color() { return "yellow"; }
  check(car: Car) {
    if (this.color() === "yellow") {
      car.stop();
    }
  }
}
class Green implements TrafficColor {
  color() { return "green"; }
  check(car: Car) {
    if (this.color() === "green") {
      car.drive();
    }
  }
}