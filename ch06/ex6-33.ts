// 예제 6.33 좋은 코드

class Account {
  private deposit(to: string, amount: number)
  {
    let accountId = database.find(to);
    database.updateOne(
      accountId,
      { $inc: { balance: amount } });
  }

  transfer(amount: number,
    from: string, to: string)
  {
    this.deposit(from, -amount);
    this.deposit(to, amount);
  }
}