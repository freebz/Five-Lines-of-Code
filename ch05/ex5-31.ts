// 예제 5.31 변경 전

class Red implements TrafficColor {
  // ...
  check(car: Car) {

    car.stop();

  }
}
class Yellow implements TrafficColor {
  // ...
  check(car: Car) {

    car.stop();

  }
}
class Green implements TrafficColor {
  // ...
  check(car: Car) {

    car.drive();
    
  }
}