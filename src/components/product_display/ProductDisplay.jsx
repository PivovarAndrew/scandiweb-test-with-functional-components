import React, { useState, useMemo } from "react";
import styles from "./product_display.module.scss";
import { useDispatch } from 'react-redux';
import { addToCart, setInitialAttributes } from 'redux/slices/CartSlice'
import classnames from 'classnames'
import ProductAttributeSet from 'components/partials/product_attribute_set/ProductAttributeSet'
import ProductPrice from 'components/partials/product_price/ProductPrice'
import { addNotify } from 'components/partials/notifications/Notifications'

import attributeSetStyles from
    'components/partials/product_attribute_set/product_attribute_set.module.scss'
import swatchAttributeStyles from
    'components/partials/product_attribute_set/SwatchAttribute/swatch_attribute.module.scss'
import textAttributeStyles from
    'components/partials/product_attribute_set/TextAttribute/text_attribute.module.scss'

const ProductDisplay = ({ data: { product, error } }) => {
    const dispatch = useDispatch()

    const attributeTheme = {
        set: attributeSetStyles,
        types: {
            text: textAttributeStyles,
            swatch: swatchAttributeStyles
        }
    }

    useMemo(() => {
        dispatch(setInitialAttributes(product))
    }, []);

    const [currentImage, setCurrentImage] = useState(product.gallery[0])

    function handleAddToCartClick(){
        dispatch(addToCart(product))
        addNotify(product.name)
    }

    if (error) return <p>Error :{error.message}</p>;

    return (
        <>
            <div className={classnames(styles.container,
                product.gallery.length <= 1 && styles.noGallery)}>
                {product.gallery.length > 1 &&
                    <div className={styles.gallery}>
                        {product.gallery.map((image, index) =>
                            <img src={image} key={index}
                                alt={index} onClick={() => setCurrentImage(image)} />
                        )}
                    </div>
                }

                <div className={styles.productImageContainer}>
                    <img className={!product.inStock ? styles.outOfStock : ""}
                        src={currentImage} alt={product.name} />

                    {!product.inStock && (
                        <h2 className={styles.outOfStockLabel}>OUT OF STOCK</h2>
                    )}
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <div className={styles.brand}>
                            {product.brand}
                        </div>

                        <div className={styles.name}>
                            {product.name}
                        </div>

                        {product.attributes?.map((attributeSet, index) =>
                            <ProductAttributeSet key={index} theme={attributeTheme}
                                product={product} attributeSet={attributeSet} />
                        )}
                    </div>

                    <div className={styles.priceLabel}>
                        Price:
                    </div>


                    <div className={styles.price}>
                        <ProductPrice product={product} />
                    </div>

                    <button className={styles.addButton} disabled={!product.inStock}
                        onClick={() => handleAddToCartClick()}>
                        Add to cart!
                    </button>

                    <div className={styles.description} dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>

            </div>
        </>
    )
}

export default ProductDisplay;
