// 예제 4.49 변경 후(3/4)

class Red implements TrafficLight {
  // ...
  updateCar() { car.stop(); }
}
class Yellow implements TrafficLight {
  // ...
  updateCar() { car.drive(); }
}
class Green implements TrafficLight {
  // ...
  updateCar() { car.drive(); }
}