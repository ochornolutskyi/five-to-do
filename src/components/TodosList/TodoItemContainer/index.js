import React, { useState } from "react";
import EditingTitleRenderer from "./TodoItemTitle/EditingTitleRenderer";
import DefaultTitleRenderer from "./TodoItemTitle/DefaultTitleRenderer";

const TodoItemContainer = ({
   className,
   id,
   title,
   completed,
   completeTaskClickHandler,
   changeTaskClickHandler,
   removeTaskClickHandler,
}) => {
   const todoTitleClasses = `${className}-title`;
   const [isEditing, setIsEditing] = useState(false);
   const titleRenderer = !isEditing ? (
      <DefaultTitleRenderer className={todoTitleClasses} title={title} />
   ) : (
      <EditingTitleRenderer
         className={`${todoTitleClasses} editing`}
         title={title}
         id={id}
         changeTaskClickHandler={changeTaskClickHandler}
         setIsEditing={setIsEditing}
      />
   );
   const isRenderButton = completed === false && !isEditing ? true : false;
   return (
      <div className={className}>
         {titleRenderer}
         <div className={`${className}-options`}>
            {isRenderButton && (
               <button className={`${className}-options__done`} onClick={() => completeTaskClickHandler(id)} />
            )}
            {isRenderButton && (
               <button
                  className={`${className}-options__edit`}
                  onClick={() => {
                     setIsEditing(true);
                  }}
               />
            )}
            <button className={`${className}-options__remove`} onClick={() => removeTaskClickHandler(id)} />
         </div>
      </div>
   );
};

export default TodoItemContainer;
