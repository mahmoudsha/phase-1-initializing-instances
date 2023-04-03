// Write your code here
class Breakfast{
    constructor(food,drink){
      this.food = food
      this.drink = drink
    }
}

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad 
        this.soup = soup
        this.drink = drink
    }
}
class Dinner{
    #dessert
    constructor(salad,soup,entree){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert =  "cheesecake"

    }
}

const bfast = new Breakfast("eggs", "juice");
const newlunch = new Lunch(
    "side salad",
    "broccoli cheddar soup",
    "iced tea"
  );

  const newdinner = new Dinner(
    "balsamic salad",
    "consomme",
    "filet mignon",
    "cheesecake"
  );  