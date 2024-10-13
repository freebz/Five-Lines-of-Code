// 예제 4.20 새로운 클래스들

class Red implements TrafficLight2 {
  isRed() { return true; }
  isYellow() { return false; }
  isGreen() { return false; }
}
class Yellow implements TrafficLight2 {
  isRed() { return false; }
  isYellow() { return true; }
  isGreen() { return false; }
}
class Green implements TrafficLight2 {
  isRed() { return false; }
  isYellow() { return false; }
  isGreen() { return true; }
}