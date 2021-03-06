import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import family from "../images/family.jpg"
import kids from "../images/kids.jpg"
import nature from "../images/nature.jpg"

const Gal = () => {
return (
<div className="carousel">
<Carousel style={{width:"auto"}}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={kids}
      alt="kids"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nature}
      alt="nature"
      
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={family}
      alt="family"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)
}

export default Gal