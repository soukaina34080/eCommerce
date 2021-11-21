import React from 'react';
import axios from 'axios';
import './Prodbdd.css';

export default class ProduitList extends React.Component {
  state = { 
    products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/product`)
      .then(res => {
        const products = res.data.success[0];
        console.log(res.data);
        this.setState({ products });
      })
  }
 
  render() {
    return (
      
      <ul>
        { this.state.products.map(product => 
          <li key={product.id}>
            <div className="cardContent">
              {/* <img src={img} className="cardImg" alt="imageCard" /> */}
              <div className="cardInfo">
                <p className="cardPart">
                  <span className="cardTitle">Product Name : </span> {product.nom}
                </p>
                <p className="cardPart">
                  <span className="cardTitle">Price :</span> {product.prix}
                </p>
                <a href={'/product/' + product.idProduit }>Info Product</a>
              </div>
            </div>
          </li>
        )}
      </ul>
      
    )
  }
}