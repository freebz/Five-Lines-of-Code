// 예제 5.35 변경 전

class Red implements TrafficColor {
  // ...
  check(car: Car) {
    if (this.color() === "red") {
      car.stop();
    }




  }
}
class Yellow implements TrafficColor {
  // ...
  check(car: Car) {


    if (this.color() === "yellow") {
      car.stop();
    }


  }
}
class Green implements TrafficColor {
  // ...
  check(car: Car) {



    
    if (this.color() === "green") {
      car.drive();
    }
  }
}