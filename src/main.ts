import "./styles.css";
import {
  averageAge,
  averageNumberOfHobbies,
  oldestPerson,
  userWithMostHobbies,
  youngestPerson,
} from "./func/user-functions";
import {
  averageMonsterAge,
  averageNumberOfTentacles,
  getAllNoWingedMonster,
  numberOfMonstersWithWings,
  prettyPrintMonster,
} from "./func/monster-functions";
import { mostCommonColor, numberOfUniqueColors } from "./func/dog-functions";
import User from "./user";
import Dog from "./dog";
import Monster from "./monster";

// Fixa så funktionen gör det den ska
const printSum = (a: number, b: number) => {
  console.log(a + b);
};

printSum(1, 2);
printSum(5, 12);

const users: User[] = [
  {
    name: "Stina",
    hobby: ["Fotboll", "Läsa"],
    age: 67,
  },
  {
    name: "Lisa",
    hobby: ["Padel"],
    age: 26,
  },
  {
    name: "Mio",
    hobby: ["Virka", "Läsa"],
    age: 22,
  },
  {
    name: "Olle",
    hobby: ["Matlagning", "Padel"],
    age: 38,
  },
  {
    name: "Leo",
    hobby: ["Padel", "Padel", "Matlagning"],
    age: 17,
  },
];

console.log(`Vi har ${users.length} stycken användare.`);
console.log(`Medelåldern på alla användare är ${averageAge(users)}`);
console.log(
  `Medelantalet hobbies per användare är ${averageNumberOfHobbies(users)}`
);
// skriv ut "Den personen med flest hobbies har Y stycken hobbies". Byt ut Y mot ett funktionsanrop. Skapa den funktionen.
const personWithMostHobbies = userWithMostHobbies(users);
console.log(
  `Personen med flest hobbies är ${personWithMostHobbies.name} som har ${personWithMostHobbies.hobby.length} stycken`
);
// skriv ut "Den äldsta personen är A och den yngsta är B". Byt ut A och B mot funktionsanrop. Ska de två funktionerna
console.log(
  `Den äldsta personen är ${oldestPerson(users).name} och den yngsta är ${
    youngestPerson(users).name
  }`
);

const dogs: Dog[] = [
  { name: "Nisse", color: "Brown" },
  { name: "Fiffi", color: "White" },
  { name: "Fluffe", color: "Black" },
  { name: "Hoppe", color: "Beige" },
  { name: "Pluto", color: "Gray" },
  { name: "Winter", color: "Gray" },
  { name: "Rolf", color: "Brown" },
  { name: "Benny", color: "Brown" },
  { name: "Krister", color: "Brown" },
];

console.log(`Vi har ${dogs.length} stycken hundar.`);
console.log(`Hundarna har ${numberOfUniqueColors(dogs)} antal unika färger.`);
console.log(
  `Den vanligaste färgen bland alla hundar är: ${mostCommonColor(dogs)}.`
);
// vi vill ha en pretty print som skriver ut alla färger som hundarna har och hur många hundar det finns av varje färg

const monsters: Monster[] = [
  { name: "Florg", age: 1266, tentacles: 29, eyes: 666, hasWings: true },
  { name: "Smirch", age: 78, tentacles: 68, eyes: 2, hasWings: false },
  { name: "Gorge", age: 25, tentacles: 2, eyes: 2, hasWings: false },
  { name: "Fioliviargh", age: 478, tentacles: 6, eyes: 1, hasWings: true },
  { name: "Snorla", age: 42, tentacles: 9, eyes: 9456, hasWings: false },
  {
    name: "Oligarnaclech",
    age: 36,
    tentacles: 675,
    eyes: 148,
    hasWings: true,
  },
  { name: "Milowarg", age: 78, tentacles: 2, eyes: 12, hasWings: false },
  { name: "Znawrl", age: 456, tentacles: 8, eyes: 6, hasWings: true },
  { name: "Welff", age: 6548, tentacles: 34, eyes: 4, hasWings: true },
  { name: "Ulf", age: 56, tentacles: 4, eyes: 2, hasWings: false },
  { name: "Ellorn", age: 423, tentacles: 2, eyes: 2, hasWings: false },
];

console.log(`Vi har ${monsters.length} stycken monster.`);
console.log(`Medelåldern på alla monster är ${averageMonsterAge(monsters)}`);
console.log(
  `Medelantalet tentakler för alla monster är ${averageNumberOfTentacles(
    monsters
  )}`
);

// loopa igenom alla monster och skriv ut dem med prettyPrintMonster
prettyPrintMonster(monsters);

console.log(
  `Antalet monster som har vingar är ${numberOfMonstersWithWings(monsters)}`
);

console.log(getAllNoWingedMonster(monsters));
