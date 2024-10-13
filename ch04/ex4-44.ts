// 예제 4.44 변경 전

class Red implements TrafficLight {
  // ...
  updateCarForLight() {
    if (this.isRed())
      car.stop();
    else
      car.drive();
  }
}
class Yellow implements TrafficLight {
  // ...
  updateCarForLight() {
    if (this.isRed())
      car.stop();
    else
      car.drive();
  }
}
class Green implements TrafficLight {
  // ...
  updateCarForLight() {
    if (this.isRed())
      car.stop();
    else
      car.drive();
  }
}