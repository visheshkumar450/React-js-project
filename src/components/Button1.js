import React, { Component } from 'react'
import Data from "../data1.json"
import Customer1 from './Customer1'
export default class Button1 extends Component {
  render() {
    return (
      <div>
        <h1 className="customer-style">our customers</h1>
        <div className="card-width">
        {
            Data.map((details,index)=>{
                return <Customer1 details={details} key={`${index}`} />
            })
        }
      </div>
      </div>
    )
  }
}
