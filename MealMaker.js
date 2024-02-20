// Challenge Meal Maker : Practicing objects ----->

// 1- Create the Menu Object :
const menu = {
  _meal: "",
  _price: 0,
  // 5- Meals and prices set randomly -------->
  _meals: ["Burger", "Pizza", "Pasta", "Salad", "Sandwich"],
  _prices: [10, 12, 8, 9, 7],

  // 2- Check typeof values ------>
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      return (this._meal = mealToCheck);
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return (this._price = priceToCheck);
    }
  },
  // 4- Get Today's Special ------>
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $ ${this._price}!`;
    } else {
      return `'Meal or price was not set correctly!'`;
    }
  },
  // 6- Today's Random Special ---------->
  generateRandomSpecial() {
    const randomIndex = Math.floor(Math.random() * this._meals.length);
    this._meal = this._meals[randomIndex];
    this._price = this._prices[randomIndex];
  },
};
// 3-Use the set method to assign new values  :
// menu.meal = 'chicken';
// menu.price = 10 ;

menu.generateRandomSpecial();
console.log(menu.todaysSpecial);
