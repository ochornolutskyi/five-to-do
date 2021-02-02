import React, { useState } from "react";
import EditingTitleRenderer from "./TodoItemTitle/EditingTitleRenderer";
import DefaultTitleRenderer from "./TodoItemTitle/DefaultTitleRenderer";
import { useDispatch } from "react-redux";
import { completeTask, removeTask } from "../../../redux/actions";

const TodoItemContainer = ({ className, title, id, completed }) => {
   const taskTitleClassName = `${className}-title`;
   const [isEditing, setIsEditing] = useState(false);

   const dispatch = useDispatch();

   const titleRenderer = !isEditing ? (
      <DefaultTitleRenderer className={taskTitleClassName} title={title} />
   ) : (
      <EditingTitleRenderer
         className={`${taskTitleClassName} editing`}
         title={title}
         id={id}
         setIsEditing={setIsEditing}
      />
   );
   const isRenderButton = completed === false && !isEditing ? true : false;
   return (
      <div className={className}>
         {titleRenderer}
         <div className={`${className}-options`}>
            {isRenderButton && (
               <button className={`${className}-options__done`} onClick={() => dispatch(completeTask(id))} />
            )}
            {isRenderButton && (
               <button
                  className={`${className}-options__edit`}
                  onClick={() => {
                     setIsEditing(true);
                  }}
               />
            )}
            <button className={`${className}-options__remove`} onClick={() => dispatch(removeTask(id))} />
         </div>
      </div>
   );
};

export default TodoItemContainer;
