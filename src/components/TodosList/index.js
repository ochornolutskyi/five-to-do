import React from "react";
import "./TodosList.scss";
import ListTitle from "../ListTitle";
import TodoItemContainer from "./TodoItemContainer";

const TODO_TITLE = "Should to do tasks";
const COMPLETED_TITLE = "Completed tasks";
const taskListClassName = "tasks-list";
const taskClassName = "task-item";

const TodosList = ({ todos, completeTaskClickHandler, changeTaskClickHandler, removeTaskClickHandler }) => {
   const notCompletedTodos = todos
      .filter((todo) => !todo.completed)
      .map((todoItem) => (
         <TodoItemContainer
            className={`${taskClassName}__todo`}
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            completed={todoItem.completed}
            completeTaskClickHandler={completeTaskClickHandler}
            changeTaskClickHandler={changeTaskClickHandler}
            removeTaskClickHandler={removeTaskClickHandler}
         />
      ));
   const completedTodos = todos
      .filter((todo) => todo.completed)
      .map((todoItem) => (
         <TodoItemContainer
            className={`${taskClassName}__complete`}
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            removeTaskClickHandler={removeTaskClickHandler}
         />
      ));
   return (
      <div>
         <div className={taskListClassName}>
            <ListTitle className={taskListClassName} title={TODO_TITLE} />
            {notCompletedTodos}
         </div>
         <div className={taskListClassName}>
            <ListTitle className={taskListClassName} title={COMPLETED_TITLE} />
            {completedTodos}
         </div>
      </div>
   );
};

export default TodosList;
