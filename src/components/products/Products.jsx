import React from 'react'
import styles from './products.module.scss'
import Loading from 'components/partials/loading/Loading'
import Product from './Product'
import SelectedCategory from './selected_category/SelectedCategory'

const Products = ({ data: { category, loading, error } }) => {
    if (loading || !category) return <Loading />
    if (error) return <p>Error :{error.message}</p>;

    // debugger;

    return (
        <>
            <div className={styles.category}>
                <SelectedCategory />
            </div>

            <div className={styles.productsContainer}>
                {category.products.map((product, key) =>
                    <Product key={key} product={product} />
                )}
            </div>
        </>
    )
}

export default Products
