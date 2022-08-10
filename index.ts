import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";
/*interface defines the blueprint of an object if the object does not follow the 
the pattern or property name an error will be thrown
*/
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  var todo = res.data as Todo;
  var { id, title, completed } = todo;
  //if the arguements are passed in a wrong order an error will be thrown
  displayTodo(id, title, completed);
});

//type validation for arguements
const displayTodo = (id: number, title: string, completed: boolean) => {
  console.log(`The following todo id is ${id}
has the title : ${title} and its status is : ${
    completed ? "completed" : "pending"
  }
`);
};
