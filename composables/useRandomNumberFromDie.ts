export const numbersFromDie = [1, 2, 3, 4, 5, 6] as const;

export type typeNumbersFromDie = (typeof numbersFromDie)[number];

export const useRandomNumberFromDie = (): typeNumbersFromDie => {
  const randomNumber = useRandomNumber(numbersFromDie[0], numbersFromDie[5]);

  numbersFromDie.forEach((number) => {
    if (number === randomNumber) {
      return randomNumber;
    }
  });

  return 1;
};
