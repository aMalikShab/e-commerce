import React from "react";
import classes from "./Slide.module.css";

const slide = (props) => {
  return (
    <div className={classes.Slide}>
      <img src={props.image} alt="kid" className={classes.image} />
    </div>
  );
};

export default slide;
