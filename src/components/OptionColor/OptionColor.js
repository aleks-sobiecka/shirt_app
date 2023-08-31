import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const OptionColor = props => {

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }

 return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
            {props.colors.map (item => <li key={item}><button onClick={() => props.selectColor(item)} type="button" className={clsx(prepareColorClassName(item), item === props.selectedColor && styles.active)} /></li>)}
        </ul>
    </div>
 )

}

OptionColor.propTypes = {
   colors: PropTypes.array.isRequired,
   selectColor: PropTypes.func.isRequired,
   selectedColor: PropTypes.string.isRequired,
  };
  
  export default OptionColor;