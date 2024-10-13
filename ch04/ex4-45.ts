// 예제 4.45 변경 후(1/4)

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