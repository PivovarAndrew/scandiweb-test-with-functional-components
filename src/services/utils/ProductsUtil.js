import groupBy from './GroupBy'

export function getProductPrice(product, currencySymbol) {
    return product.prices.find((price) =>
        price.currency.symbol === currencySymbol
    ).amount;
}

export function getProductsPrice(products, currencySymbol) {
    return products.reduce((memo, product) => {
        return memo + getProductPrice(product, currencySymbol)
    }, 0).toFixed(2)
}

export function getProductsTax(products, currencySymbol) {
    return (getProductsPrice(products, currencySymbol) * 21 / 100).toFixed(2)
}

export function groupProducts(products) {
    return groupBy(products, 'id')
}
