import React from 'react'
import { Product } from '../product/Product'
import  './style.css'

export const Products = (props) => {
  return (
    <div className="cardsContent">
      <Product 
       productName={props.products[0].name}
       price={props.products[0].price}
      />
      <Product 
      productName={props.products[1].name}
      price={props.products[1].price}
      />
      <Product
      productName={props.products[2].name}
      price={props.products[2].price}
       />
    </div>
  )
}
export default Products;
