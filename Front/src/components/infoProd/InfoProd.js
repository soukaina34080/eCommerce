import React from 'react';
/*import { useState, useEffect } from "react";
import axios from 'axios';*/


function InfoProd(props) {
    
  /*const [produit,setProduit]=useState({});

    useEffect(()=> {
        axios.get(`http://localhost:4000/api/product/`+props.idProduit)
        .then(res => res.json())
        .then(res => {
          const products = res.data.success[0];
          console.log(res.data);
          this.setProduit({ products });
        })
    });*/
  
      return (
       <div>
            <div className="row">
            <div className="col-lg-12">
              <div className="card mb-10">
                <div className="card-header">
                  <nav className="header-navigation">
                    <a href="/" className="btn btn-link">Back to the list</a>
                  </nav>
                </div>
                <div className="card-body store-body">
                  <div className="product-info">
                    <div className="product-gallery">
                      <div className="product-gallery-thumbnails">
                      </div>
                      <div className="product-gallery-featured">
                      <div className="view zoom overlay  mb-3 mb-md-0">
                <img className="img-fluid  productImg"
                   alt="Imag"/>
                <a href="#!">
                  <div className="mask waves-effect waves-light">
                    <img className="img-fluid  productImg"
                     alt="" />
                    <div className="mask  waves-effect waves-light"></div>
                  </div>
                </a>
              </div>
                      </div>
                    </div>
                    <div className="product-seller-recommended">
                      <div className="product-description mb-5">
                        <h2 className="mb-5">Description</h2>
                        <p>description du produit</p>
                      </div>
                    </div>
                  </div>
                  <div className="product-payment-details">
                    <h4 className="product-title mb-2">Titre du produit</h4>
                    <h2 className="product-price display-4">prix</h2>
                    <br/><br/>
                    <label for="quant">Quantity</label>
                    <br/><br/>
                    <input type="number" name="quantity" min="1" id="quant" className="form-control mb-5 input-lg" placeholder="Choose the quantity"/>
                    <button className="btn btn-primary btn-lg btn-block">Buy Now</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
    
       </div>
        );
}

export default InfoProd;