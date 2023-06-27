const person = {
  firstName: "Noor",
  lastName: "Mudassar",
  favoriteColor: "yellow",
};

const {
  firstName: myName,
  lastName: surname,
  favoriteColor: bestColor,
} = person;

console.log(myName);
console.log(surname);
console.log(bestColor);

// console.log(person.firstName);
// console.log(person["lastname"]);

// const color = "favoriteColor";

// console.log(person[color]);

const meal = {
  appetizer: "spring rolls",
  entree: "pasta",
  dessert: "lava cake",
  drink: "iced coffee",
};

// const { dessert } = meal;
// const { appetizer, entree } = meal;
// const { drink: myFavoriteDrink } = meal;

// console.log(dessert);
// console.log(appetizer);
// console.log(entree);
// console.log(myFavoriteDrink);
