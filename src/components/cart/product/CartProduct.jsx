import React, { useState } from 'react'
import PropTypes from "prop-types"
import styles from './cart_product.module.scss'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import ProductInfo from 'components/partials/cart/product_info/ProductInfo'
import QuantityChange from 'components/partials/cart/quantity_change/QuantityChange'
import productInfoStyles from
    'components/partials/cart/product_info/product_info.module.scss'
import quantityChangeStyles from
    'components/partials/cart/quantity_change/qty_change.module.scss'
import attributeSetStyles from
    'components/partials/product_attribute_set/product_attribute_set.module.scss'
import swatchAttributeStyles from
    'components/partials/product_attribute_set/SwatchAttribute/swatch_attribute.module.scss'
import textAttributeStyles from
    'components/partials/product_attribute_set/TextAttribute/text_attribute.module.scss'

/**
 * Сomponent that represents cart product.
 *
 * @component
 * @returns {React.ReactElement} The cart product.
 */
const CartProduct = ({ product, count }) => {
    const [carouselIndex, setCarouselIndex] = useState(0)
    const lastImageIndex = product.gallery.length - 1

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

    function switchImageOnLeft() {
        const changedIndex = carouselIndex - 1
        changedIndex < 0 ? setCarouselIndex(lastImageIndex) : setCarouselIndex(changedIndex)
    }

    function switchImageOnRight() {
        const changedIndex = carouselIndex + 1
        changedIndex > lastImageIndex ? setCarouselIndex(0) : setCarouselIndex(changedIndex)
    }

    return (
        <>
            <hr />
            <div className={styles.container}>
                <div className={styles.info}>
                    <ProductInfo product={product} theme={theme} />
                </div>

                <div className={styles.qtyChangeActions}>
                    <QuantityChange product={product} count={count}
                        styles={theme.quantityChangeTheme} />
                </div>

                <div className={styles.productImage}>
                    <img src={product.gallery[carouselIndex]} alt={product.name} />

                    {product.gallery.length > 1 &&
                        <div className={styles.imageSwitcherContainer}>
                            <button className={styles.imageSwitcher} onClick={() => switchImageOnLeft()}>
                                <BsChevronLeft />
                            </button>

                            <button className={styles.imageSwitcher} onClick={() => switchImageOnRight()}>
                                <BsChevronRight />
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

CartProduct.propTypes = {
    /**
     * Product in the cart
     */
    product: PropTypes.object,
    /**
     * Product quantity
     */
    count: PropTypes.number,
}

CartProduct.defaultProps = {
    product: null,
    count: null,
}

export default CartProduct;
