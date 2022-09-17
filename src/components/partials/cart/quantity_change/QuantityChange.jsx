import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from 'redux/slices/CartSlice';
import { addNotify } from 'components/partials/notifications/Notifications'
import { removeNotify } from 'components/partials/notifications/Notifications'

const CartProduct = ({ product, count, styles }) => {
    const dispatch = useDispatch()

    function handleAddToCartClick() {
        dispatch(addToCart(product))
        addNotify(product.name)
    }

    function handleRemoveFromCartClick() {
        dispatch(removeFromCart(product))
        removeNotify(product.name)
    }

    return (
        <>
            <button className={styles.action} onClick={() => handleAddToCartClick()}>
                +
            </button>

            <div className={styles.count}>
                {count}
            </div>

            <button className={styles.action} onClick={() => handleRemoveFromCartClick()}>
                –
            </button>
        </>
    );
}

export default CartProduct;
