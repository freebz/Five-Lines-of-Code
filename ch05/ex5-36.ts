// 예제 5.36 변경 후(3/8)

class Red implements TrafficColor {
  // ...
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
class Yellow implements TrafficColor {
  // ...
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
class Green implements TrafficColor {
  // ...
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