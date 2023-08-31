import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState (props.colors[0]);
  const [currentSize, setCurrentSize] = useState (props.sizes[0].name);


  const getPrice = () => {
    const basePrice = props.basePrice;
    const additionalPrice = props.sizes.find(size => size.name === currentSize).additionalPrice;
    return basePrice + additionalPrice;
  }

  function summary(e) {
    e.preventDefault();
    console.log('Summary');
    console.log('===============');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice());
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }
  
  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor}/>
      <ProductForm 
        title={props.title} 
        price={getPrice()} 
        sizes={props.sizes} 
        selectSize={setCurrentSize} 
        selectedSize={currentSize} 
        colors={props.colors} 
        selectColor={setCurrentColor} 
        selectedColor={currentColor}
        summary={summary}/>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    additionalPrice: PropTypes.number
  })).isRequired,
};

export default Product;