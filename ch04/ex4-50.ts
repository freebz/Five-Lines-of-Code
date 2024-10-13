// 예제 4.50 변경 전

function updateCarForLight(
  current: TrafficLight)
{
  if (current.isRed())
    car.stop();
  else car.drive();
}