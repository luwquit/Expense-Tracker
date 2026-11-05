export const getPercent = (wholeAmount: number, currentAmount: number): number => {
  const percent = (currentAmount / wholeAmount) * 100;
  return percent;
}