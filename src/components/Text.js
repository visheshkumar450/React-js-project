import React, { Component } from 'react'
import "./index"
export default class Text extends Component {
  render() {
    return (
      <div id="about">
      <div className="text-container">
          <img src={process.env.PUBLIC_URL+"/image1.png"} className="image-container"/>
          <h1 className="heading-container">about</h1>
          <p className="details-container">An internet bot, also known as web robot, WWW robot or simply bot, is a software application that runs automated tasks (scripts) over the Internet. Typically, bots perform tasks that are both simple and structurally repetitive, at a much higher rate than would be possible for a human alone.
          </p>
       </div>

      </div>
        
    )
  }
}
