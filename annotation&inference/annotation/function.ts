/** previously we saw how to annotate function variable a function
 * will have two annotations
 * 1 is variable annotations which will be between variable name and function definition
 * 2 is function annotation which will be part of function parameters
 * both of them will have type of the parameters and name of parameters to the function
 * and return type of the function  */
const add1: (x: number, y: number) => number = (
  x: number,
  y: number
): number => {
  return x + y;
};

console.log(add1(85, 45));
// access specifier| var name  |: variable annotation (param1, param 2)=> return type =
//function definition annotation(param1, param2): return type =>{function definition}

//points to note is that the parameters name can be fdifferent between variable annotation and function annotation type must be same

const subtraction = (c: number, d: number): string => {
  return `the subtaction of ${c}, ${d} is ${c - d} `;
};
console.log(subtraction(85, 45));

//annotating normal functions
function greeting(message: string, name: string): string {
  return `${message} ${name} !`;
}

//annotating anonymous functions
const greet = function (message: string, name: string): string {
  return `${message} ${name} !`;
};

//a function which does not return any thing will have return type as void
//a function with return type as void can return undefined
const directGreet = (message: string, name: string): void => {
  console.log(`${message} ${name}`);
};

//if a function will never return anything except an error the return type of that function should be never
// destructuring a =n object in parameters of a funcion and annotating

const directGreet2 = ({ name, message }: { name: string; message: string }) => {
  console.log(`${message} ${name}`);
};

directGreet2({ name: "ram", message: "va da" });
