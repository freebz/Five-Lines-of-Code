// 예제 6.32 나쁜 코드

function accountDeposit(
  to: string, amount: number)
{
  let accountId = database.find(to);
  database.updateOne(
    accountId,
    { $inc: { balance: amount } });
}

function accountTransfer(amount: number,
  from: string, to: string)
{
  accountDeposit(from, -amount);
  accountDeposit(to, amount);
}