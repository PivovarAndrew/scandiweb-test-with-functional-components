import { useSelector } from 'react-redux';
import { selectCurrencySymbol } from 'redux/slices/CurrencySlice';
import { getProductPrice } from 'services/utils/ProductsUtil';

function ProductPrice({ product }) {
    const currencySymbol = useSelector(selectCurrencySymbol)

    const productPrice = getProductPrice(product, currencySymbol)

    return (
        <>
            {currencySymbol}
            {new Intl.NumberFormat(/*'en-US'*/'ru', {
                style: 'decimal',
                maximumFractionDigits: 2,
            }).format(productPrice)}
        </>
    )
}

export default ProductPrice;
