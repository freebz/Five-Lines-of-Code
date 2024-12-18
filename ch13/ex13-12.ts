// 예제 13.12 변경 후


class Sphere {
  volume() {
    let result = 4/3;
    for (let i = 0; i < 3; i++)
      result = result + this.radius;
    return result * 3.1415926553589793;
  }
}