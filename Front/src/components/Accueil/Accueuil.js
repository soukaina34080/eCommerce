import React from 'react';
import Products from '../products/Products';
import Hero from '../Hero/Hero';

const Acceuil = () => {
    const products = [
        {
          id: 'p1',
          name: 'Toilet Paiper',
          price: 94.12,
        },
        { id: 'p2', name: 'TV', price: 799.49},
        {
          id: 'p3',
          name: 'laptop',
          price: 294.67
        },
        {
          id: 'p4',
          name: 'Desk',
          price: 450,
        },
      ];
      return (
        <div >
         <Hero />
         <Products products={products}/>
        </div>
      );
};

export default Acceuil;




