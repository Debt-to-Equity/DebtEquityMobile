export const itemTotal = (arr) =>
  arr.reduce((acc, ele) => {
    return (acc += ele.number);
  }, 0);

export const getTime = (revenue, budget, debt) => {
  let monthlyCashFlow = itemTotal(revenue) - itemTotal(budget);
  let debtTotal = itemTotal(debt);

  let totalMonths: number = debtTotal / monthlyCashFlow;

  if (totalMonths > 11) {
    return `${Math.floor(totalMonths / 12)} Years and ${(
      totalMonths % 12
    ).toFixed()} Months`;
  }
  return `${totalMonths.toFixed()} Months`;
};
