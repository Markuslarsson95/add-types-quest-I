import Dog from "../dog";
import Color from "../props/color";

const getDogColors = (dogs: Dog[]): Color[] => {
  const colors: Color[] = [];
  dogs.forEach((dog) => {
    colors.push(dog.color);
  });
  return colors;
};
export const numberOfUniqueColors = (dogs: Dog[]): number => {
  const uniqueColors: Color[] = [];
  const allColors = getDogColors(dogs);
  allColors.forEach((color) => {
    if (uniqueColors.indexOf(color) === -1) {
      uniqueColors.push(color);
    }
  });
  return uniqueColors.length;
};

export const mostCommonColor = (dogs: Dog[]): string | undefined => {
  const colors = getDogColors(dogs);
  return colors
    .sort(
      (a, b) =>
        colors.filter((v) => v === a).length -
        colors.filter((v) => v === b).length
    )
    .pop();
};

export const prettyPrintDogs = (dogs: Dog[]) => {
  console.log(``);
};
