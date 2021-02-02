import {
   FETCH_TODOS_1_SUCCESS,
   FETCH_TODOS_1_FAILED,
   FETCH_TODOS_1,
   ADD_NEW_TASK,
   COMPLETE_TASK,
   REMOVE_TASK,
   CHANGE_TASK_TITLE,
} from "./action_types";

export const fetchTodos_1 = () => (dispatch) => {
   dispatch({ type: FETCH_TODOS_1 });
   const TODOS_1_URL = "https://jsonplaceholder.typicode.com/todos";
   setTimeout(() => {
      fetch(TODOS_1_URL)
         .then((response) => {
            if (response.ok) return response.json();
         })
         .then((data) => dispatch({ type: FETCH_TODOS_1_SUCCESS, payload: data.splice(0, 15) }))
         .catch((err) => dispatch({ type: FETCH_TODOS_1_FAILED, payload: err }));
   }, 2000);
};

export const addNewTask = (title) => {
   const newTask = { id: Date.now(), title, completed: false };
   return {
      type: ADD_NEW_TASK,
      payload: newTask,
   };
};

export const completeTask = (id) => {
   return {
      type: COMPLETE_TASK,
      payload: id,
   };
};

export const removeTask = (id) => {
   return {
      type: REMOVE_TASK,
      payload: id,
   };
};

export const changeTaskTitle = (id, title) => {
   return {
      type: CHANGE_TASK_TITLE,
      payload: { id, title },
   };
};
