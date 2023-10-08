export const useRandomNumber = (min: number, max: number) => {
  if (min > max) {
    return min;
  }

  const randomInterval = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomInterval;
};
