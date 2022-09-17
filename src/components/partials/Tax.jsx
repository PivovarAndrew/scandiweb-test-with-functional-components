import { useSelector } from 'react-redux';
import { selectCurrencySymbol } from 'redux/slices/CurrencySlice';
import { getProductsTax } from 'services/utils/ProductsUtil';

function Tax({ products }) {
    const currencySymbol = useSelector(selectCurrencySymbol)

    const tax = getProductsTax(products, currencySymbol)

    return (
        <>
            {currencySymbol}
            {new Intl.NumberFormat('ru', {
                style: 'decimal',
                maximumFractionDigits: 2
            }).format(tax)}
        </>
    )
}

export default Tax;
