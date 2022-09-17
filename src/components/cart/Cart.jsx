import React from 'react';
import styles from './cart.module.scss';
import { groupProducts } from 'services/utils/ProductsUtil';
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/slices/CartSlice';
import CartProduct from './product/CartProduct'
import TotalPrice from 'components/partials/total_price/TotalPrice'
import Tax from 'components/partials/Tax';

const CartProducts = () => {
    const cartProducts = useSelector(selectProducts)
    const grouppedCartProducts = groupProducts(cartProducts)
    const cartProductsCount = cartProducts.length

    return (
        <>
            <div className={styles.header}>
                Cart
            </div>

            <div className={styles.container}>
                <div className={styles.cartProduct}>
                    {Object.entries(grouppedCartProducts)?.map(([key, product]) =>
                        <CartProduct key={key} product={product.object} count={product.count} />
                    )}
                </div>

                <hr />

                <div className={styles.totalContainer}>
                    <div className={styles.totalLabels}>
                        Tax 21%: <br />
                        Quantity: <br />
                        Total:
                    </div>

                    <div className={styles.totalValues}>
                        <Tax products={cartProducts} /> <br />
                        {cartProductsCount} <br />
                        <TotalPrice products={cartProducts} />
                    </div>
                </div>

                <button className={styles.orderButton}>Order</button>
            </div>
        </>
    );
}

export default CartProducts;
