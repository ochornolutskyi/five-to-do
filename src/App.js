import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import CreateTask from "./components/CreateTask";
import ErrorHint from "./components/ErrorHint";
import TodosList from "./components/TodosList";
import { fetchTodos_1 } from "./redux/actions";

function App() {
   const isLoading = useSelector((state) => state.todos_1.isLoading);
   const todos_1 = useSelector((state) => state.todos_1.tasks);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchTodos_1());
   }, []);

   if (isLoading) return <div>Loading...</div>;
   return (
      <div className="App">
         {!todos_1 ? (
            <ErrorHint hintText="Something went wrong, please, reload the page" />
         ) : (
            <>
               <CreateTask />
               <hr style={{ width: "95%", borderColor: "#fff" }} />
               <TodosList />
            </>
         )}
      </div>
   );
}

export default App;
