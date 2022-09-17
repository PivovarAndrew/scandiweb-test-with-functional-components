import styles from './swatch_attribute.module.scss'
import classnames from 'classnames'

function SwatchAttribute({ attribute, selectedAttribute, handleClick, styles }) {

  return (
    <div className={classnames(styles.container,
      attribute.value === "#FFFFFF" && styles.white,
      attribute.id === selectedAttribute.id && styles.active)}
      alt={attribute.displayValue}
      style={{ background: attribute.value }}
      onClick={() => handleClick(attribute)}>
    </div>
  )
}

export default SwatchAttribute;
