// 예제 4.46 변경 전

class Red implements TrafficLight {
  // ...
  updateCarForLight() {
    if (true)
      car.stop();
    else
      car.drive();
  }
}
class Yellow implements TrafficLight {
  // ...
  updateCarForLight() {
    if (false)
      car.stop();
    else
      car.drive();
  }
}
class Green implements TrafficLight {
  // ...
  updateCarForLight() {
    if (false)
      car.stop();
    else
      car.drive();
  }
}