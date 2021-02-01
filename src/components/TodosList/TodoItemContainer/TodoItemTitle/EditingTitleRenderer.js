import React, { useState } from "react";
import ErrorHint from "../../../ErrorHint";

const HINT_TEXT = "The title can't be empty";

const EditingTitleRenderer = ({ className, id, title, changeTaskClickHandler, setIsEditing }) => {
   const [newTitle, setNewTitle] = useState(title);
   const [isShowHint, setIsShowHint] = useState(false);
   const changeTitleHandler = (value) => {
      setNewTitle(value);
   };
   const confirmNewTitle = (id, newTitle) => {
      if (!newTitle.trim().length) {
         setIsShowHint(true);
         setTimeout(() => setIsShowHint(false), 1500);
      } else {
         setIsEditing(false);
         changeTaskClickHandler(id, newTitle);
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
