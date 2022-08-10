/* what is a type ?
definition in course: Easy way to refer different properties+functions a value has.

own definition : type is used to denote the behavior and structure of a value

instead of saying a value has these propertiies and methods to it we give it a name.

for example string type has many properties and methods like charAt, indexOf, subStr

instead of saying it is a value which has properties and methods like charAT we simply
say it is a string


types available in typescript
there are two types of data in typescript, primitive and object types
primitive datat type:
*string : '',"", "today is monday"
*number: 0.0025, -20, 40000
*boolean: true, false
*void
*undefined
*symbol
*null

Object data type:

*functions
*classes
*arrays
*objects

why do we care about types ?

1)types helps us to find errors while typing the code instead of finding them in run time.
it kind of sets a definition to custom objects when something goes out of the definition
it throws an error
2) it improves readability, when some new person is reading the code he/she gets to understand 
what kind of data flows in a piece of code easily

Date: new Date()
custom interface:
*/

//example of types

const today = new Date();

// the autocomplete shows date functions because the compiler knows it is a date value
// we cannot assign a number value to today at later point even if it is a var
today.getDate();

const person = {
  age: 20,
};

class color {
  name: string = "value";
}

const red = new color();
red.name = "red";

console.log("printing color name", red.name);

/* when to use the types?

we use types everywhere, used to do validation
*/
