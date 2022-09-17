import React from 'react';
import styles from './cart_products.module.scss';
import { groupProducts } from 'services/utils/ProductsUtil';
import { Link } from 'react-router-dom'
import CartProduct from './product/CartProduct'
import TotalPrice from 'components/partials/total_price/TotalPrice'

const CartProducts = ({ products, close }) => {
    const cartProducts = groupProducts(products)
    const cartProductsCount = cartProducts.length

    return (
        <>
            <div className={styles.container}>
                <span>
                    <span className={styles.label}>
                        My Bag
                    </span>

                    ,&nbsp;
                    {cartProductsCount} item{cartProductsCount !== 1 && "s"}
                </span>

                {products &&
                    <div className={styles.cartProduct}>
                        {Object.entries(cartProducts)?.map(([key, product]) =>
                            <CartProduct key={key} product={product.object} count={product.count} />
                        )}
                    </div>
                }

                <span className={styles.total}>
                    Total:
                    <div className={styles.price}>
                        <TotalPrice products={products} />
                    </div>
                </span>

                <span className={styles.cartItemBtn}>
                    <Link to={"/cart"} onClick={close}>
                        <button className={styles.viewBagBtn}>
                            View bag
                        </button>
                    </Link>

                    <button className={styles.checkOutBtn}>
                        Checkout
                    </button>
                </span>
            </div>
        </>
    );
}

export default CartProducts;
