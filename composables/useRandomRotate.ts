export const useRandomRotate = (min = -400, max = 500) => {
  const rotate = useRandomNumber(min, max);
  return rotate.toString() + 'deg';
};
