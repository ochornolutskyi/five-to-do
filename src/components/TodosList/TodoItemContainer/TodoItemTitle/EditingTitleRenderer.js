import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTaskTitle } from "../../../../redux/actions";
import ErrorHint from "../../../ErrorHint";

const HINT_TEXT = "The title can't be empty";

const EditingTitleRenderer = ({ className, id, title, setIsEditing }) => {
   const [newTitle, setNewTitle] = useState(title);
   const [isShowHint, setIsShowHint] = useState(false);
   const dispatch = useDispatch();
   const changeTitleHandler = (value) => {
      setNewTitle(value);
   };
   const confirmNewTitle = (id, newTitle) => {
      if (newTitle.trim() === title) {
         setIsEditing(false);
      } else if (!newTitle.trim().length) {
         setIsShowHint(true);
         setTimeout(() => setIsShowHint(false), 1500);
      } else {
         console.log("s");
         dispatch(changeTaskTitle(id, newTitle.trim()));
         setIsEditing(false);
      }
   };
   return (
      <div className={className}>
         <input type="text" onChange={(event) => changeTitleHandler(event.target.value)} value={newTitle} />
         <button className="button-apply" onClick={() => confirmNewTitle(id, newTitle)} />
         {isShowHint && <ErrorHint hintText={HINT_TEXT} />}
      </div>
   );
};
export default EditingTitleRenderer;
