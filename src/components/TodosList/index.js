import React from "react";
import "./TodosList.scss";
import ListTitle from "../ListTitle";
import TodoItemContainer from "./TodoItemContainer";
import { useSelector } from "react-redux";

const TODO_TITLE = "Should to do tasks";
const COMPLETED_TITLE = "Completed tasks";
const taskListClassName = "tasks-list";
const taskClassName = "task-item";

const TodosList = () => {
   const todoTasks = useSelector((state) => state.todos_1.todoTasks);
   const completedTasks = useSelector((state) => state.todos_1.completedTasks);
   const todoTasksComponent = todoTasks.map((task) => (
      <TodoItemContainer key={task.id} {...task} className={`${taskClassName}__todo`} />
   ));
   const completedTasksComponent = completedTasks.map((task) => (
      <TodoItemContainer key={task.id} {...task} className={`${taskClassName}__complete`} />
   ));
   return (
      <div>
         <div className={taskListClassName}>
            <ListTitle className={taskListClassName} title={TODO_TITLE} />
            {todoTasksComponent}
         </div>
         <div className={taskListClassName}>
            <ListTitle className={taskListClassName} title={COMPLETED_TITLE} />
            {completedTasksComponent}
         </div>
      </div>
   );
};

export default TodosList;
