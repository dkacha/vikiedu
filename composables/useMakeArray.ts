export const useMakeArray = (arrayLength: number, invertOrder = false) => {
  const newArray = Array.from({ length: arrayLength }, (_, i) => i + 1);
  return invertOrder ? newArray.reverse() : newArray;
};
