export const formatMoney = (money: number): string => {
  const amount: number = money;

  const formattedAmount: string = amount
    .toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).replace('€', '')
  return formattedAmount;
};
