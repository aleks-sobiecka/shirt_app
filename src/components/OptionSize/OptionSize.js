import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionSize = props => {

 return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
            {props.sizes.map(item => <li key={item.name}><button onClick={() => props.selectSize(item.name)} type="button" className={clsx(item.name === props.selectedSize && styles.active)}>{item.name}</button></li>)}
        </ul>
    </div>
 )

}

OptionSize.propTypes = {
   sizes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        additionalPrice: PropTypes.number
    })).isRequired,
    selectSize: PropTypes.func.isRequired,
    selectedSize: PropTypes.string.isRequired,

  };
  
  export default OptionSize;