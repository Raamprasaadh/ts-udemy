var apples = 5;
/** syntax is access specifier variable name : type = value
 * once the type is assigned the value of the variable cannot be changed to
 * different type in later part of the code, no matter what the access specifier is
 */
apples = 10; // this will not show any error because its of same type and access specifier is let
//apples = "test" this will throw error as we are trying to assign a different type
var speed = "fast";
//speed = true
// variables of type null and undefined has same value as the type
//inbuilt objects
var now = new Date();
// date = "test"
//type annotations for arrays
var colors = ["red", "blue", "green"]; // will show an error if we try to add data of different type
var ages = [21, 18, 17, 45, 25, 36, 42];
// type annotations for class members
var Car = /** @class */ (function () {
    function Car() {
        this.name = "car";
    }
    return Car;
}());
var car = new Car(); //syntax = access_specifier variable_name:type(class) =  new ClassName();
//without new ClassName it will throw an error saying trying to access before assigning a value
console.log(car);
// annotating object literals
/**
 * while annotating objectswe follow the same rule of specifiying the type after the variable/object name.
 * but while specifying the types we have to be more detailed and give specifications for each property of the object
 * if an object has two properties a and b of type number we have to elaborate and specify it
 * by using semicolon; as separator between properties inside object paranthesis
 */
var obj = {
    x: 10,
    y: 10
};
// annotating functions
/** between function definition and variable name annotation will fall
 * function annotation has two parts one is arguements and its types,
 * second one is the type of values the function might return
 *
 * */
var add = function (x, y) { return x + y; };
console.log(add(10, 5));
