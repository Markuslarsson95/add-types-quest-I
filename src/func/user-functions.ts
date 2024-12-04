import User from "../user";

export const averageAge = (allUsers: User[]): number => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return Math.round(allAges / allUsers.length);
};

export const averageNumberOfHobbies = (allUsers: User[]): number => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return Math.round(AllHobbies / allUsers.length);
};

export const userWithMostHobbies = (allUsers: User[]): User => {
  let mostHobbies = allUsers[0];
  allUsers.forEach((user) => {
    if (user.hobby.length > mostHobbies.hobby.length) {
      mostHobbies = user;
    }
  });
  return mostHobbies;
};

export const oldestPerson = (allUsers: User[]): User => {
  let oldest = allUsers[0];
  for (let i = 1; i < allUsers.length; i++) {
    if (allUsers[i].age > oldest.age) {
      oldest = allUsers[i];
    }
  }
  return oldest;
};

export const youngestPerson = (allUsers: User[]): User => {
  let youngest = allUsers[0];
  for (let i = 1; i < allUsers.length; i++) {
    if (allUsers[i].age < youngest.age) {
      youngest = allUsers[i];
    }
  }
  return youngest;
};
