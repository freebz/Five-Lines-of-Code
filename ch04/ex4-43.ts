// 예제 4.43 함수를 클래스로 복제

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