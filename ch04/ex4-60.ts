// 예제 4.60 변경 전

function transfer(
  from: string,
  to: string,
  amount: number)
{
  deposit(from, -amount);
  deposit(to, amount);
}