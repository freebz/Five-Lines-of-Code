// 예제 4.48 변경 전

class Red implements TrafficLight {
  // ...
  updateCarForLight() { car.stop(); }
}
class Yellow implements TrafficLight {
  // ...
  updateCarForLight() { car.drive(); }
}
class Green implements TrafficLight {
  // ...
  updateCarForLight() { car.drive(); }
}