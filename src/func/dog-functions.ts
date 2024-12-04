import Dog from "../dog";

const getDogColors = (dogs: Dog[]): string[] => {
  const colors: string[] = [];
  dogs.forEach((dog) => {
    colors.push(dog.color);
  });
  return colors;
};
export const numberOfUniqueColors = (dogs: Dog[]): number => {
  const colors = getDogColors(dogs);
  return Array.from(new Set(colors)).length;
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
