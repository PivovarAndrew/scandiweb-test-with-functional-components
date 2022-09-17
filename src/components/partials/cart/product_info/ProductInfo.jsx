import React from 'react'
import ProductPrice from 'components/partials/product_price/ProductPrice'
import ProductAttributeSet from 'components/partials/product_attribute_set/ProductAttributeSet'

const CartProduct = ({ product, theme }) => {
    const styles = theme.productInfoTheme

    return (
        <>
            <div className={styles.brand}>
                {product.brand}
            </div>

            <div className={styles.name}>
                {product.name}
            </div>

            <div className={styles.price}>
                <ProductPrice product={product} />
            </div>

            {product.attributes?.map((attributeSet, index) => (
                <ProductAttributeSet key={index} theme={theme.attributesTheme}
                    product={product} attributeSet={attributeSet} />
            ))}
        </>
    );
}

export default CartProduct;
