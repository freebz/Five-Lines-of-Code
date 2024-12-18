// 예제 13.9 문자열 형식의 타입 코드

function area(width: number, shape: string)
{
  if (shape === "circle")
    return (width/2) * (width/2) * Math.PI;
  else if (shape === "square")
    return width * width;
}