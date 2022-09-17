import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { addToCart, setInitialAttributes } from "redux/slices/CartSlice";
import { useDispatch } from 'react-redux';
import { addNotify } from 'components/partials/notifications/Notifications'

function ShoppingCart({ product }) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setInitialAttributes(product))
        dispatch(addToCart(product))
        addNotify(product.name)
    }

    return <BsCart2 onClick={() => handleClick()} />
}

export default ShoppingCart;
