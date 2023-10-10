import type { GTDiceNumbers } from '@/types/dice';

export const numbersFromDie: GTDiceNumbers[] = [1, 2, 3, 4, 5, 6];

export const useRandomNumberFromDie = (): GTDiceNumbers => {
  const randomNumber = useRandomNumber(numbersFromDie[0], numbersFromDie[5]);

  numbersFromDie.forEach((number) => {
    if (number === randomNumber) {
      return randomNumber;
    }
  });

  return 1;
};
