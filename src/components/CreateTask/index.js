import React, { useState } from "react";
import "./CreateTask.scss";
import Title from "../ListTitle";
import { useDispatch } from "react-redux";
import { addNewTask } from "../../redux/actions";

const TITLE_TASK_PLACEHOLDER = "Please, add task title";
const CREATE_TASK_TITLE = "Please, create the new task";
const classes = "createTask";

const CreateTask = () => {
   const [title, setTitle] = useState("");
   const changeHandler = (value) => {
      setTitle(value);
   };
   const dispatch = useDispatch();

   return (
      <div className={`${classes}-wrapper`}>
         <Title classes={classes} title={CREATE_TASK_TITLE} />
         <div className={classes}>
            <input
               type="text"
               className={`${classes}-input`}
               onChange={(event) => changeHandler(event.target.value)}
               placeholder={TITLE_TASK_PLACEHOLDER}
               value={title}
            />
            <button
               className={!title.trim().length ? "buttonDisable" : null}
               onClick={() => {
                  dispatch(addNewTask(title));
                  setTitle("");
               }}
               disabled={!title.trim().length ? true : false}
            />
         </div>
      </div>
   );
};

export default CreateTask;
