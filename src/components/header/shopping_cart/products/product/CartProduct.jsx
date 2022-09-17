import React from 'react'
import styles from './cart_product.module.scss'
import ProductInfo from 'components/partials/cart/product_info/ProductInfo'
import { Link } from "react-router-dom";
import QuantityChange from 'components/partials/cart/quantity_change/QuantityChange'
import quantityChangeStyles from
    'components/partials/cart/quantity_change/mini_qty_change.module.scss'
import productInfoStyles from
    'components/partials/cart/product_info/mini_product_info.module.scss'
import attributeSetStyles from
    'components/partials/product_attribute_set/mini_product_attribute_set.module.scss'
import swatchAttributeStyles from
    'components/partials/product_attribute_set/SwatchAttribute/mini_swatch_attribute.module.scss'
import textAttributeStyles from
    'components/partials/product_attribute_set/TextAttribute/mini_text_attribute.module.scss'

const CartProduct = ({ product, count }) => {
    const theme = {
        productInfoTheme: productInfoStyles,
        quantityChangeTheme: quantityChangeStyles,
        attributesTheme: {
            set: attributeSetStyles,
            types: {
                text: textAttributeStyles,
                swatch: swatchAttributeStyles
            }
        }
    }

    return (
        <>
        
            <div className={styles.container}>
                <div className={styles.info}>
                    <ProductInfo product={product} theme={theme} />
                </div>

                <div className={styles.qtyChangeActions}>
                    <QuantityChange product={product} count={count} 
                    styles={theme.quantityChangeTheme}/>
                </div>

                <Link to={`/${product.category}/${product.id}`}>
                <img src={product.gallery[0]} className={styles.productImage}
                    alt={product.name} />
                    </Link>
            </div>
        </>
    );
}

export default CartProduct;
