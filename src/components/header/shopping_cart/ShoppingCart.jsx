import React, { useState, useRef, useEffect } from 'react';
import styles from './shopping_cart.module.scss';
import { BsCart2 } from "react-icons/bs"
import classnames from 'classnames'
import { useSelector } from 'react-redux';
import { selectProducts } from 'redux/slices/CartSlice';
import useOutsideClick from 'services/hooks/useOutsideClick';
import useScrollLock from 'services/hooks/useScrollLock';
import CartProducts from './products/CartProducts';

const ShoppingCart = () => {
    const cartProducts = useSelector(selectProducts)
    const [productsCount, setProductsCount] = useState(cartProducts.length)

    const [open, setOpen] = useState(false)
    const shoppingCartRef = useRef()
    const { lockScroll, unlockScroll } = useScrollLock();

    const LIMIT_PRODUCTS_COUNT_FOR_OUTPUT = 99

    useOutsideClick(shoppingCartRef, handleOutsideClick);

    useEffect(() => {
        setProductsCount(cartProducts.length)
    }, [cartProducts]);

    function handleOutsideClick() {
        if (open) {
            setOpen(!open)
            unlockScroll()
        }
    }

    function handleClick() {
        setOpen(!open)
        open ? unlockScroll() : lockScroll()
    }

    return (
        <>
            <div ref={shoppingCartRef} className={styles.container}>
                <div alt="Shopping Cart" className={styles.shoppingCart} onClick={() => { handleClick() }}>
                    {!productsCount == 0 &&
                        <sup className={classnames(styles.productsCount,
                            productsCount > LIMIT_PRODUCTS_COUNT_FOR_OUTPUT && styles.overflowed)}>
                            {productsCount > LIMIT_PRODUCTS_COUNT_FOR_OUTPUT ?
                                `${LIMIT_PRODUCTS_COUNT_FOR_OUTPUT}+`
                                : cartProducts.length}
                        </sup>
                    }
                    <BsCart2 />
                </div>

                {open &&
                    <div id="overlay" className={styles.overlay}>
                        <CartProducts products={cartProducts} close={handleClick}/>
                    </div>
                }
            </div>
        </>
    );
}

export default ShoppingCart;
