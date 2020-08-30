import React, { Component } from "react";
import kid1 from "../../../assets/Kid/kid1.jpg";
import kid2 from "../../../assets/Kid/kid2.jpg";
import kid3 from "../../../assets/Kid/kid3.jpg";
import Slide from "./Slide/Slide";
import classes from "./Slides.module.css";
import Next from "../../../assets/navigation/next.png";
import Previous from "../../../assets/navigation/previous.png";

class Slides extends Component {
  images = [kid1, kid2, kid3];
  state = {
    index: 0,
  };

  next = () => {
    this.setState((preState) => ({
      index: preState.index + 1,
    }));
  };

  previous = () => {
    this.setState((preState) => ({
      index: preState.index - 1,
    }));
  };

  autoSlide = () => {};

  render() {
    return (
      <div className={classes.Slides}>
        <Slide
          image={Previous}
          clicked={this.previous}
          disabled={this.state.index === 0}
          className="icon"
        />
        <Slide image={this.images[this.state.index]} className="image"/>
        <Slide
          image={Next}
          clicked={this.next}
          disabled={this.state.index === this.images.length - 1}
          className="icon"
        />
      </div>
    );
  }
}

export default Slides;
