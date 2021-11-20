import React from 'react'
import './style.css'

export const Product = ({productName , price , img}) => {
  return (
    <div className="cardContent">
      {/* <img src={img} className="cardImg" alt="imageCard" /> */}
      <div className="cardInfo">
        <p className="cardPart">
          <span className="cardTitle">Product Name : </span> {productName}
        </p>
        <p className="cardPart">
          <span className="cardTitle">Price :</span> {price}
        </p>
        <a href="/product">Info Product</a>
      </div>
    </div>
  )
}
