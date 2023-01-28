export const beautifyCost = (cost: number) => {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });
  return formatter.format(cost);
};
