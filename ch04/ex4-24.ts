// 예제 4.24 변경 후(2/4)

function updateCarForLight(
  current: TrafficLight)
{
  if (current.isRed())
    car.stop();
  else
    car.drive();
}