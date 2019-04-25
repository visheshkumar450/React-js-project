import React, { Component } from 'react'
import {products} from '../data'
export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
            
        }
    }
    componentDidMount(){
        this.setproducts();
    }

    
    setproducts=()=>{
        let tempproducts=[];
        products.forEach(item=>{
               const singleitem={...item}
               tempproducts=[...tempproducts,singleitem]
         })
        this.setState(()=>{
           return  {products:tempproducts}
        })
    }

    
    render() {
        const {products}=this.state
    return (
    <div>
        <h1 className="customer-style"><p>articles</p></h1>
        <div className="content"><button className="btn-article btn1-article" type="button">articles</button></div>
      <div className="card-columns col-12">    
      {
            products.map(items=>{
                return (
        
          <div className="card bg-danger effect">
          <img className="card-img-top" src={items.picture}></img>
            <div className="car-body">
              <h3 className="card-title" Style="text-transform:uppercase;text-align:center;color:white">{items.name}</h3>
              <p className="card-text" Style="font-weight:600;font-size:20px;padding:0px 5px 10px 5px;">{items.review}</p>
             </div>
            </div>
      
                )
            })
        }
      </div>
      </div>
    )
  }
}
