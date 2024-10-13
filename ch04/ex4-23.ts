// 예제 4.23 변경 전

function updateCarForLight(
  current: TrafficLight)
{
  if (current === TrafficLight.RED)
    car.stop();
  else
    car.drive();
}