import { useState, useEffect, useMemo } from "react";
import SwatchAttribute from './SwatchAttribute/SwatchAttribute'
import TextAttribute from './TextAttribute/TextAttribute'
import { useDispatch, useSelector } from 'react-redux';
import { chooseAttribute, selectChoosenAttributes } from 'redux/slices/CartSlice';
import { getProductSelectedAttribute } from 'services/utils/AttributesUtil';

function ProductAttributeSet({ product, attributeSet, theme }) {
  const choosenAttributes = useSelector(selectChoosenAttributes)
  const initialAttribute = getProductSelectedAttribute(product, attributeSet, choosenAttributes)

  const styles = theme.set

  const dispatch = useDispatch()
  const [selectedAttribute, setSelectedAttribute] = useState(initialAttribute)

  useEffect(() => {
    setSelectedAttribute(initialAttribute)
  }, [initialAttribute]);

  useEffect(() => {
    setSelectedAttribute(selectedAttribute)
    dispatch(chooseAttribute({ product, attributeSet, selectedAttribute }))
  }, [selectedAttribute]);

  function handleClick(attribute) {
    setSelectedAttribute(attribute)
  }

  return (
    <>
      <div className={styles.name}>
        {attributeSet.name}:
      </div>

      <div className={styles.container}>
        {(() => {
          switch (attributeSet.type) {
            case 'swatch': {
              return attributeSet.items.map((attribute, key) => {
                return <SwatchAttribute key={key} attribute={attribute} styles={theme.types.swatch}
                  selectedAttribute={selectedAttribute} handleClick={handleClick} />
              })
            }
            case 'text': {
              return attributeSet.items.map((attribute, key) => {
                return <TextAttribute key={key} attribute={attribute} styles={theme.types.text}
                  selectedAttribute={selectedAttribute} handleClick={handleClick} />
              })
            }
            default: {
              return null
            }
          }
        })()}
      </div>
    </>
  );
}

export default ProductAttributeSet;
