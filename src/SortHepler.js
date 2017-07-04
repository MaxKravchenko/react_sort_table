/**
 * Created by max on 26.06.17.
 */
export const numberSorter = (a, b) => a - b;

export const booleanSorter = (a, b) => (+a) - (+b);

export const stringSorter = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  return a < b
    ? -1
    : a > b
      ? 1
      : 0
};
