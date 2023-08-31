import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {

 return (
    <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.price}$</span>
        </header>
        <form>
            <OptionSize 
                sizes={props.sizes} 
                selectSize={props.selectSize}
                selectedSize={props.selectedSize} />
            <OptionColor 
                colors={props.colors}
                selectColor={props.selectColor}
                selectedColor={props.selectedColor} />
          <Button className={styles.button} onClick={props.summary}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
 )

}

ProductForm.propTypes = {
    summary: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        additionalPrice: PropTypes.number
      })).isRequired,
    selectSize: PropTypes.func.isRequired,
    selectedSize: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    selectColor: PropTypes.func.isRequired,
    selectedColor: PropTypes.string.isRequired,
  };
  
  export default ProductForm;