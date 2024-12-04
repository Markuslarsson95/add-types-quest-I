//utöka så alla egenskaper för monstret skrivs ut
import Monster from "../monster";

export const prettyPrintMonster = (monsters: Monster[]) => {
  monsters.forEach((monster) => {
    console.log(
      `Monster: ${monster.name}\nAge: ${monster.age}\nTentacles: ${monster.tentacles}\nWings: ${monster.hasWings}`
    );
  });
};

export const averageMonsterAge = (monsters: Monster[]): number => {
  let totalAge = 0;
  monsters.forEach((monster) => {
    totalAge += monster.age;
  });
  return Math.round(totalAge / monsters.length);
};

export const averageNumberOfTentacles = (monsters: Monster[]): number => {
  let totalTentacles = 0;
  monsters.forEach((monster) => {
    totalTentacles += monster.tentacles;
  });
  return Math.round(totalTentacles / monsters.length);
};

export const numberOfMonstersWithWings = (monsters: Monster[]): number => {
  let numberOfMonstersWithWings = 0;
  monsters.forEach((monster) => {
    if (monster.hasWings) {
      numberOfMonstersWithWings++;
    }
  });
  return numberOfMonstersWithWings;
};

export const getAllNoWingedMonster = (monsters: Monster[]): Monster[] => {
  const monstersWithNoWings: Monster[] = [];
  monsters.forEach((monster) => {
    if (!monster.hasWings) {
      monstersWithNoWings.push(monster);
    }
  });
  return monstersWithNoWings;
};
