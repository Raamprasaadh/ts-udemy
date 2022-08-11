/**
 * whenever we do not explicitly define a variables name typescript will automatically interprete the
 * type of the variable. this phenomenon is called as type inference
 * type inference will work properly only if the variable declaration and initialisation happens in same line
 * if variable declaration and initialisation happens in two different lines typescript will assign type any to that variable
 */

const color1 = "red";

let val;
val = "apple";

/** why use type annotations when type inference can get the values automatically?
 * when variable declaration and initialisation does not happen in same line
 * when a function returns value of Any type
 * when we want to declare a variable to have a type that cannot be inferred
 */
/**
 * any type means typescript has no idea what the value can be
 * error checking is not applicable in variables of type any
 * how to avoid type any returned by a function?
 *  we can avoid it by adding annotation to the variable which we pass the value
 *  from the function
 */
/**
 * during delayed initialisation we can add annotation with expected value type and avoid any type
 */
/**
 * when inference is not able to get the type it will assign any ty
 * we can add multiple type to a variable by using pipe symbol(|)
 */
