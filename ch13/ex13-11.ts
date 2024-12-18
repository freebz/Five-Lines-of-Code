// 예제 13.11 변경 전

const FOUR_THIRDS = 4/3;
class Sphere {
  volume() {
    let result = FOUR_THIRDS;
    for (let i = 0; i < 3; i++)
      result = result + this.radius;
    return result * Math.PI;
  }
}