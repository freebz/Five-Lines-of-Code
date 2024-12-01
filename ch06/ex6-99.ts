// 예제 6.99 변경 후(2/2)

class Transfer {
  constructor(from: string, amount: number)
  {
    this.deposit(from, -amount);
  }
  deposit(to: string, amount: number)
    let accountId = database.find(to);
    database.updateOne(
      accountId,
      { $inc: { balance: amount } });
  } 
}