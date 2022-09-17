import React from 'react'
import styles from './products.module.scss'
import { Link } from "react-router-dom";
import 'index.scss'
import ShoppingCart from './shopping_cart/ShoppingCart'
import ProductPrice from '../partials/product_price/ProductPrice'

const Product = ({ product }) => {  
    return (
        <>
            <div className={styles.productContainer}>
                <Link to={`/${product.category}/${product.id}`}>
                    <div className={styles.imageContainer}>
                        <img className={!product.inStock ? styles.outOfStock : ""}
                            src={product.gallery[0]} alt={product.name} />

                        {!product.inStock && (
                            <h2 className={styles.outOfStockLabel}>OUT OF STOCK</h2>
                        )}
                    </div>
                </Link>
                
                <div className={styles.info}>
                    <div className={styles.name}>
                        {product.brand} {product.name}
                    </div>

                    {product.inStock && (
                        <div className={styles.shoppingCart}>
                            <ShoppingCart product={product} />
                        </div>
                    )}
                </div>

                <div className={styles.price}>
                    <ProductPrice product={product} />
                </div>
            </div>
        </>
    )
}

export default Product;
