/**
 * classes are blueprint to create an object with
 * some fields and methods to represent a thing
 * difference between classes and interface is
 * interface is used to type check of the arguements passed to a function
 * class is used to create a new object with provided blueprint
 */

class Vehicle {
  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

// inheritance system in typescript

class Car extends Vehicle {
  noOfwheel = 4;
  reverseGear = true;
}

const honda1 = new Car();

honda1.drive();
honda1.honk();
console.log(honda1.noOfwheel, honda1.reverseGear);

/**
 * difference between javascript and typescript classes
 * is in typescript we can add access modifiers to the class
 * the modifiers in typescript are
 *
 * public - the methods in a public class can be called anywhere anytime
 *
 * private - the methods and data inside a private class can be accessed only
 * by that class
 *
 * protected - the methods and data inside
 * a protected class can be accessed by that class and its child classes
 */

/**
 * we should not change the type of the method we are wverriding inside a child class
 */
//modifiers

class Food {
  expiryDate = new Date();
  protected edible(): boolean {
    return true;
  }
  protected expiry(): Date {
    return this.expiryDate;
  }
  setExpiryDate(date: Date): void {
    this.expiryDate = date;
  }
}

class Lays extends Food {
  private type = "Potato Chips";
  constructor(public flavor: string) {
    super();
    this.flavor = flavor;
  }
}

const tangyTomato = new Lays("Tangy Tomato");
setTimeout(() => {
  tangyTomato.setExpiryDate(new Date());
  console.log(tangyTomato);
}, 3000);
