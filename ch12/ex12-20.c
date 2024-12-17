// 예제 12.20 매직 비트 패턴의 역제곱근 함수

float Q_rsqrt( float number )
{
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y = number;
  i = * ( long * ) &y;            // 난해한 부동 소수를 사용한 비트 수준의 조작
  i = 0x5f3759df - ( i >> 1 );    // 이게 머야?        <-- 매직 비트 패턴
  y = * ( float * ) &i;
  y = y * ( threehalfs - ( x2 * y * y ) );  // 첫 번째 반복
//y = y * ( threehalfs - ( x2 * y * y ) );  // 두 번째 반복, 제거 가능
  return y;
}