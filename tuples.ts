/**
 * tuple is a special type of array
 * tuple contains multiple different properties of a single thing in array like structure(no keys only values)
 * to work with tuples we need strict types to be defined
 */
const obj: { color: string; carbonated: boolean; sugar: number } = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const tuple: [string, boolean, number] = ["brown", true, 40];
//tuples will be used in many variables best way to use a tuple efficiently is to create a type and re use it instead of annotating everytime

type drink = [string, boolean, number];

const sprite: drink = ["plain", true, 40];
const tea: drink = ["brown", false, 20];

//why do we use tuples?
// it is hard to use tuples to represent data, object is preferred to represent data
