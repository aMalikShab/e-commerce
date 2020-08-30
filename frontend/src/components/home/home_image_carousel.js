import React, { useState } from "react";
import classes from "../../css_files/carsol.module.css";
import kid1 from "../../assets/Kid/kid1.jpg";
import kid2 from "../../assets/Kid/kid2.jpg";
import kid3 from "../../assets/Kid/kid3.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: { kid1 },
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: { kid2 },
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: { kid3 },
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const ImageSlide = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {/* <img src={item.src} alt={item.altText} /> */}
        <img className="d-block w-100" src={item.src} alt={item.altText} />

        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default ImageSlide;
