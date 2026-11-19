export const getPercent = (wholeAmount: number, currentAmount: number): string => {
  const percent = (currentAmount / wholeAmount) * 100;
  return percent.toFixed(0);
}