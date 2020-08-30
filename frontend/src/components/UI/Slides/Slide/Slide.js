import React from "react";
import classes from "./Slide.module.css";

const slide = (props) => {
  return (
    <div className={classes.Slide}>
      {!props.disabled ? (
        <img
          src={props.image}
          alt="kid"
          className={classes[props.className]}
          onClick={props.clicked}
        />
      ) : null}
    </div>
  );
};

export default slide;
