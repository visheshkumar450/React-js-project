import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel"
import "../App.css"
import CarouselCaption from 'react-bootstrap/CarouselCaption';
export default class Imageslider extends Component {
  render() {
    return (
      
      <Carousel className="setting-all">
        
      <Carousel.Item>
          <img className="d-block trans" src={process.env.PUBLIC_URL + "/image1.png"} height="450px" width="100%"></img>
          <CarouselCaption>
            <a href="www." target="_blank">
              <h3 className="color-black hovering">Racing Bots</h3>
              <p className="color-black hovering">These bots can race with humans.</p>
            </a>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block trans" src={process.env.PUBLIC_URL + "/image2.jpg"} height="450px" width="100%"></img>
          <CarouselCaption>
            <a href="#" target="_blank">
              <h3 className="color-black hovering">Bots</h3>
              <p className="color-black hovering">Bots can make ur life easy.</p>
            </a>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block trans" src={process.env.PUBLIC_URL + "/image3.jpg"} height="450px" width="100%" transition="2000"></img>
          <CarouselCaption>
          <a href="#" target="_blank">
            <h3 className="color-black hovering"> Chat Bots</h3>
            <p>You can ask all your doubts.</p>
          </a>
          </CarouselCaption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block trans" src={process.env.PUBLIC_URL + "/image4.jpg"} height="450px" width="100%"></img>
          <CarouselCaption>
            <a href="#" target="_blank">
              <h3 className="color-black hovering">Social Bots</h3>
              <p className="color-black hovering">These bots are made for soical cause.</p>
            </a>
          </CarouselCaption>
        </Carousel.Item>

      </Carousel>
      
    )
  }
}
