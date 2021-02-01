import { useEffect, useState } from "react";
import "./App.scss";
import CreateTask from "./components/CreateTask";
import TodosList from "./components/TodosList";

function App() {
   const [todos, setTodos] = useState(null);

   const createTaskClickHandler = (id, title, completed) => {
      setTodos([...todos, { id, title, completed }]);
   };
   const completeTaskClickHandler = (id) => {
      let newTodos = todos.filter((todo) => todo.id !== id);
      let completedTodo = todos.filter((todo) => todo.id === id)[0];
      completedTodo.completed = true;
      newTodos.push(completedTodo);
      setTodos(newTodos);
   };
   const changeTaskClickHandler = (id, title) => {
      let newTodos = [...todos];
      let changingTask = newTodos.find((todo) => todo.id === id);
      if (title === changingTask.title) return;
      changingTask.title = title.trim();
      setTodos(newTodos);
   };
   const removeTaskClickHandler = (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
   };

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
         .then((response) => response.json())
         .then((jsonData) => setTodos(jsonData.splice(0, 15)));
   }, []);

   if (!todos) return <div>Loading...</div>;
   return (
      <div className="App">
         <CreateTask createTaskClickHandler={createTaskClickHandler} />
         <hr style={{ width: "95%", borderColor: "#fff" }} />
         <TodosList
            todos={todos}
            completeTaskClickHandler={completeTaskClickHandler}
            changeTaskClickHandler={changeTaskClickHandler}
            removeTaskClickHandler={removeTaskClickHandler}
         />
      </div>
   );
}

export default App;
