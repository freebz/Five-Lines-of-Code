// 예제 5.33 변경 전

class Red implements TrafficColor {
  color() { return "red"; }
  check(car: Car) {
    if (true) {
      car.stop();
    }
  }
}
class Yellow implements TrafficColor {
  color() { return "yellow"; }
  check(car: Car) {
    if (true) {
      car.stop();
    }
  }
}
class Green implements TrafficColor {
  color() { return "green"; }
  check(car: Car) {
    if (true) {
      car.drive();
    }
  }
}