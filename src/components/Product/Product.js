import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState (props.colors[0]);
  const [currentSize, setCurrentSize] = useState (props.sizes[0].name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item => <li key={item.name}><button onClick={() => setCurrentSize(item.name)} type="button" className={clsx(item.name === currentSize && styles.active)}>{item.name}</button></li>)}
              {/* <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li> */}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map (item => <li key={item}><button onClick={() => setCurrentColor(item)} type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} /></li>)}
              {/* <li><button type="button" className={clsx(styles.colorBlue, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed) } /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li> */}
            </ul>
          </div>
          <Button className={styles.button} onClick={summary}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
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