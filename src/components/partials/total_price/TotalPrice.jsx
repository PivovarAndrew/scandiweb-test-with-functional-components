import { useSelector } from 'react-redux';
import { selectCurrencySymbol } from 'redux/slices/CurrencySlice';
import { getProductsPrice } from 'services/utils/ProductsUtil';

function TotalPrice({ products }) {
    const currencySymbol = useSelector(selectCurrencySymbol)

    const totalPrice = getProductsPrice(products, currencySymbol)

    return (
        <>
            {currencySymbol}
            {new Intl.NumberFormat('ru', {
                style: 'decimal',
                maximumFractionDigits: 2
            }).format(totalPrice)}
        </>
    )
}

export default TotalPrice;
