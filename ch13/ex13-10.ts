// 예제 13.10 정수형 타입 코드

const CIRCLE = 0;
const SQUARE = 1;
function area(width: number, shape: number)
{
  if (shape === CIRCLE)
    return (width/2) * (width/2) * Math.PI;
  else if (shape === SQUARE)
    return width * width;
}