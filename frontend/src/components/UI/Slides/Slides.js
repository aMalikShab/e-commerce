import React, { Component } from "react";
import kid1 from "../../../assets/Kid/kid1.jpg";
import kid2 from "../../../assets/Kid/kid2.jpg";
import kid3 from "../../../assets/Kid/kid3.jpg";
import Slide from "./Slide/Slide";
import classes from "./Slides.module.css";

class Slides extends Component {
  images = [kid1, kid2, kid3];
  state = {
    index: 0,
  };

  next = () => {
    this.setState((preState) => ({
      index: (preState.index + 1) % 3,
    }));
  };

  previous = () => {
    this.setState((preState) => ({
      index: (preState.index - 1 < 0 ? 2 : preState.index - 1) % 3,
    }));
  };

  autoSlide = () => {};

  render() {
    return (
      <div className={classes.Slides}>
        <button onClick={this.previous}>Previous</button>
        <Slide image={this.images[this.state.index]} />
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}

export default Slides;
