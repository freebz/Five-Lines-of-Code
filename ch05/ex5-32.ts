// 예제 5.32 변경 후(1/8)

class Red implements TrafficColor {
  // ...
  check(car: Car) {
    if (true) {
      car.stop();
    }
  }
}
class Yellow implements TrafficColor {
  // ...
  check(car: Car) {
    if (true) {
      car.stop();
    }
  }
}
class Green implements TrafficColor {
  // ...
  check(car: Car) {
    if (true) {
      car.drive();
    }
  }
}