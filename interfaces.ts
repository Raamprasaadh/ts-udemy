/**
 * interfaces is important to design big applications
 * what is interface?
 * interface is used to create a new type inside our code, the goal of the interface is to define
 * different property names and its types
 * created using interface keyword
 * it is mostly used to create the blueprint of an object
 */

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string; // function without any arguements should return string
}

const printVehicle = ({ name, year, broken }: Vehicle) => {
  console.log(
    `the ${name} of year ${year} is ${
      broken ? "not in running" : "in running"
    } condition`
  );
};

const honda = {
  name: "honda",
  year: 1995,
  broken: true,
  summary(): string {
    return `the ${this.name} of year ${this.year} is ${
      this.broken ? "not in running" : "in running"
    } condition`;
  },
};

console.log(honda.summary());
