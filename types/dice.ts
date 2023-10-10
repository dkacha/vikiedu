export type GTDiceNumbers = 1 | 2 | 3 | 4 | 5 | 6;

export const typeGuardGTDiceNumbers = (
  value: number,
): value is GTDiceNumbers => {
  return [1, 2, 3, 4, 5, 6].includes(value);
};
