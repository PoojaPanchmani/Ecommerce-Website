import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () =>
{
    return(<>
    <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src="https://i.postimg.cc/hjQt0rrz/carousel1.jpg" 
    alt="First slide" style={{height:"400px"}}/>
    <Carousel.Caption>
     <i><pre style={{fontSize:"45px",marginTop:"120px",color:"white",fontWeight:"bold"}}>
          40%  Off  On  Each <br/> Used Item</pre></i>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src="https://i.postimg.cc/JnXRXhrj/carousel2.jpg" 
    alt="Second slide" style={{height:"400px"}}/>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src="https://i.postimg.cc/4ybZ8Fhd/carousel3.jpg"
    alt="Third slide" style={{height:"400px"}}/>
  </Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src="https://i.postimg.cc/mkVJ1xHQ/carousel4.jpg" 
    alt="Third slide" style={{height:"400px"}}/>
  </Carousel.Item>

</Carousel>
    </>);
}

export default CarouselHome;