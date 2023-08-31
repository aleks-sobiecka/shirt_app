import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  //tworzymy stan o nazwie products (tablica produktów)
  //dane przechowujemy w osobnym pliku src/data/product.js
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} {...product} />)}
    </section>
  );
};

export default Products;