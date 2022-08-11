/**
 * in typescript we cannot use array with different values, we have to use single type in a whole array
 * if we need to use an array of multiple types we have to do a slight modification
 */
//if we ar creating an empty array we need to annotate the type to avoid ANY type
const carMakers = ["suzuki", "toyota", "tata"];

/**
 * why typed arrays?
 *1 typed arrays helps type inference, lets say we have a string array when we pull a value from that array
 * and assign it to a variable, type inference gets to know the variable is of type array.
 *
 * typed array prevents addition of incompatible values in an array
 *
 */
//if we need to create an array of multiple types we have to annotate that types using pipe symbol like below
const multiArray: (string | number | boolean)[] = ["string", 100, true];
