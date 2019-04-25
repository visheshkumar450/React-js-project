import React, { Component } from 'react'
export default class Customer1 extends Component {
  render() {
      const {details}=this.props
    return (
        <div className="flip-card col-3">
        
            <div className="flip-card-inner">
            
                    <div className="flip-card-frontside">
                        <img src={details.picture} alt="hello" />

                    </div>
    
                    <div className="flip-card-backside details">
                        <h3>{details.name} {details.id}</h3>
                        <p>{details.review}</p>
                    </div> 
        </div>
      </div>
    )
  }
}
