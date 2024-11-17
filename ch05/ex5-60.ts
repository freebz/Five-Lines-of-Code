// 예제 5.60 변경 전

if (today.getDate() === 1
  && account.getBalance()
  > invoice.getAmount())
{
  account.pay(bill);
} else if (invoice.isLastDayOfPayment()
  && invoice.isApproved())
{
  account.pay(bill);
}