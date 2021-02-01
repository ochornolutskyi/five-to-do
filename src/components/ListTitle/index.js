import React from "react";
import "./ListTitle.scss";

const Title = ({ title, className }) => {
   return <span className={`${className}-title title`}>{title}</span>;
};

export default Title;
