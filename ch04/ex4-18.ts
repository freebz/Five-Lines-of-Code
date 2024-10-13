// 예제 4.18 초기 코드

enum TrafficLight {
  RED, YELLOW, GREEN
}
const CYCLE = [TrafficLight.RED, TrafficLight.GREEN, TrafficLight.YELLOW];
function updateCarForLight(current: TrafficLight) {
  if (current === TrafficLight.RED)
    car.stop();
  else
    car.drive();
}