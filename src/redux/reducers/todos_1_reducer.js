import {
   FETCH_TODOS_1,
   FETCH_TODOS_1_FAILED,
   FETCH_TODOS_1_SUCCESS,
   ADD_NEW_TASK,
   COMPLETE_TASK,
   REMOVE_TASK,
   CHANGE_TASK_TITLE,
} from "../action_types";

const initialState = {
   isLoading: null,
   tasks: [],
   todoTasks: [],
   completedTasks: [],
};

const filterTodoTask = (tasks) => tasks.filter((task) => !task.completed);
const filterCompletedTask = (tasks) => tasks.filter((task) => task.completed);
const findTaskById = (tasks, id) => tasks.find((task) => task.id === id);

const todos_1_reducer = (state = initialState, action) => {
   let newTasks, newTodoTasks, newCompletedTasks, currentTask;
   switch (action.type) {
      case FETCH_TODOS_1:
         return { ...state, isLoading: true };
      case FETCH_TODOS_1_SUCCESS:
         newTasks = action.payload;
         newTodoTasks = filterTodoTask(newTasks);
         newCompletedTasks = filterCompletedTask(newTasks);
         return {
            ...state,
            isLoading: false,
            tasks: newTasks,
            todoTasks: newTodoTasks,
            completedTasks: newCompletedTasks,
         };
      case FETCH_TODOS_1_FAILED:
         return { ...state, isLoading: false, tasks: null };
      case ADD_NEW_TASK:
         newTasks = [...state.tasks];
         newTasks.push(action.payload);
         newTodoTasks = filterTodoTask(newTasks);
         return {
            ...state,
            tasks: newTasks,
            todoTasks: newTodoTasks,
         };
      case COMPLETE_TASK:
         newTasks = [...state.tasks];
         currentTask = findTaskById(newTasks, action.payload);
         currentTask.completed = true;
         newTasks = newTasks.filter((task) => task.id !== currentTask.id);
         newTasks.push(currentTask);
         newTodoTasks = filterTodoTask(newTasks);
         newCompletedTasks = filterCompletedTask(newTasks);
         return {
            ...state,
            tasks: newTasks,
            todoTasks: newTodoTasks,
            completedTasks: newCompletedTasks,
         };
      case REMOVE_TASK:
         newTasks = [...state.tasks];
         newTasks = newTasks.filter((task) => task.id !== action.payload);
         newTodoTasks = filterTodoTask(newTasks);
         newCompletedTasks = filterCompletedTask(newTasks);
         return { ...state, tasks: newTasks, todoTasks: newTodoTasks, completedTasks: newCompletedTasks };
      case CHANGE_TASK_TITLE:
         newTasks = [...state.tasks];
         currentTask = findTaskById(newTasks, action.payload.id);
         currentTask.title = action.payload.title;
         newTodoTasks = filterTodoTask(newTasks);
         return { ...state, tasks: newTasks, todoTasks: newTodoTasks };
      default:
         return state;
   }
};

export default todos_1_reducer;
